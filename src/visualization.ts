import * as d3 from 'd3';
import * as assert from "assert";
import {Tooltip} from "./tooltip";

export interface Node extends d3.SimulationNodeDatum {
    id: string;
    image: string;
    description: string;
    relSize: number;
    relDistance: number;
    x?: number;
    y?: number;
}

export interface Link extends d3.SimulationLinkDatum<Node> {
    source: Node; // parent
    target: Node; // child
}

export class GraphVisualizer {
    private readonly nodes: Node[] = [];
    private readonly links: Link[] = [];
    private readonly config: { linkDistanceUnit: number, chargeStrength: number, circleRadiusUnit: number };
    private readonly simulation;
    private hideTask;

    public constructor(
        private readonly container: SVGGElement,
    ) {
        const sizeFactor = Math.min(this.container.clientWidth, this.container.clientHeight) / 1000;
        this.config = {
            linkDistanceUnit: 300 * sizeFactor,
            circleRadiusUnit: 80 * sizeFactor,
            chargeStrength: -60 * sizeFactor
        };
        this.simulation = d3.forceSimulation<Node, Link>(this.nodes)
            .on('tick', () => this.ticked());
        this.applyAllForces();

        this.simulation.velocityDecay(0.05);
        this.hideTask = () => {
        };

        this.registerResize();
    }

    public addNode(node: Node) {
        this.nodes.push(node);
        this.update();
    }

    public addLink(link: Link) {
        this.links.push(link);
        this.update();
    }

    private update() {
        d3.select(this.container)
            .selectAll<SVGGElement, Node>('.node')
            .data(this.nodes, d => d.id)
            .join(
                enter => {
                    const nodeEnter = enter
                        .append('g')
                        .attr('class', 'node')
                        .call(d3.drag<SVGGElement, Node>()
                            .on('start', (event, node) => this.dragstarted(event, node))
                            .on('drag', (event, node) => this.dragged(event, node))
                            .on('end', (event, node) => this.dragended(event, node)))
                        .append('g')
                        .attr('class', 'inner-node');

                    nodeEnter // white background
                        .append('circle')
                        .attr('r', d => d.relSize * this.config.circleRadiusUnit)
                        .attr('fill', d => 'white');
                    nodeEnter // image background
                        .append('circle')
                        .attr('r', d => d.relSize * this.config.circleRadiusUnit)
                        .attr('fill', d => `url(#${'pattern' + d.id})`);
                    nodeEnter.each(d =>
                        d3.select(this.container)
                            .append('defs')
                            .append('pattern')
                            .attr('id', 'pattern' + d.id)
                            .attr('patternUnits', 'userSpaceOnUse')
                            .attr('x', -d.relSize * this.config.circleRadiusUnit)
                            .attr('y', -d.relSize * this.config.circleRadiusUnit)
                            .attr('width', d.relSize * this.config.circleRadiusUnit * 2)
                            .attr('height', d.relSize * this.config.circleRadiusUnit * 2)
                            .append("image")
                            .attr("xlink:href", d.image)
                            .attr('width', d.relSize * this.config.circleRadiusUnit * 2)
                            .attr('height', d.relSize * this.config.circleRadiusUnit * 2)
                    )

                    let tip = new Tooltip();
                    document.body.appendChild(tip.getNode());

                    let that = this;
                    let showTimeout:NodeJS.Timeout;

                    tip.getNode().onmouseover = (() => {
                        clearTimeout(showTimeout)
                    });
                    tip.getNode().onmouseout = ( () => {
                        showTimeout = setTimeout(this.hideTask, 800)
                    });

                    nodeEnter.filter((d: Node) => {
                        return d.description !== undefined && d.description.length > 0;
                    }).on('mouseover', function (...args) {
                        clearTimeout(showTimeout)
                        tip.setData(...args, that.config.circleRadiusUnit);
                        that.hideTask();
                        tip.show();
                    }).on('mouseout', function (...args) {
                        that.hideTask = () => tip.hide();
                        showTimeout = setTimeout(that.hideTask, 800)
                    });

                    return nodeEnter;
                },
                undefined,
                exit => exit.remove());

        d3.select(this.container)
            .selectAll<SVGLineElement, Link>('.link')
            .data(this.links, (d) => `${d.source.id}-${d.target.id}`)
            .join(
                enter => enter
                    .append('line')
                    .attr('class', 'link'),
                update => update,
                exit => exit.remove());

        // Update the simulation
        this.simulation.nodes(this.nodes);
        this.simulation.force('link', d3.forceLink<Node, Link>(this.links).strength(0.07)
            .distance((link) => link.target.relDistance * this.config.linkDistanceUnit));
        this.simulation.alpha(0.3).restart();

        // re-order line and nodes
        d3.select(this.container).selectAll<SVGLineElement, Link>('.link')
            .each(function (link) {
                const linkElement = this;
                linkElement.parentNode?.insertBefore(linkElement, linkElement.parentNode.firstChild);
            });
    }

    private selectLinks() {
        return d3.select(this.container).selectAll<SVGLineElement, Link>('.link').data(this.links);
    }

    private selectNodes() {
        return d3.select(this.container).selectAll<SVGGElement, Node>('.node').data(this.nodes);
    }

    private dragstarted(event: any, d: Node) {
        if (!event.active) this.simulation.alphaTarget(0.3).restart();
        d.fx = event.x;
        d.fy = event.y;
    }

    private dragged(event: any, d: Node) {
        d.fx = event.x;
        d.fy = event.y;
    }

    private dragended(event: any, d: Node) {
        if (!event.active) this.simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    private ticked() {
        this.selectLinks()
            .attr('x1', (d) => d.source?.x ?? assert.fail())
            .attr('y1', (d) => d.source?.y ?? assert.fail())
            .attr('x2', (d) => d.target?.x ?? assert.fail())
            .attr('y2', (d) => d.target?.y ?? assert.fail());
        this.selectNodes()
            .attr('transform', (d) => `translate(${d.x}, ${d.y})`);
    }

    private registerResize() {
        let lastResizeTimeout: NodeJS.Timeout | undefined;

        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (lastResizeTimeout !== undefined) {
                    clearTimeout(lastResizeTimeout);
                }
                // Set a new timeout to execute the resize logic after 1 second of inactivity
                lastResizeTimeout = setTimeout(() => {
                    this.applyAllForces();
                    this.simulation.alpha(1).restart();
                    lastResizeTimeout = undefined;
                }, 500);
            }
        });
        resizeObserver.observe(this.container);
    }

    private applyCenterForce() {
        this.simulation.force('center', d3.forceCenter(this.container.clientWidth / 2, this.container.clientHeight / 2)
            .strength(0.1));
    }

    private applyBoundaryForce() {
        const boundaryForce = (params: { width: number, height: number, strength: number }) => {
            return (alpha: number) => {
                for (const node of this.simulation.nodes()) {
                    const {x, y, vx, vy} = node;
                    const xminlim = 0.1 * params.width;
                    const xmaxlim = 0.9 * params.width;
                    const yminlim = 0.1 * params.height;
                    const ymaxlim = 0.9 * params.height;
                    if (x !== undefined && vx !== undefined && x <= xminlim) {
                        node.vx = vx + (xminlim - x) * params.strength * alpha;
                    } else if (x !== undefined && vx !== undefined && x >= 0.9 * params.width) {
                        node.vx = vx + (xmaxlim - x) * params.strength * alpha;
                    }

                    if (y !== undefined && vy !== undefined && y <= 0.1 * params.height) {
                        node.vy = vy + (yminlim - y) * params.strength * alpha;
                    } else if (y !== undefined && vy !== undefined && y >= 0.9 * params.height) {
                        node.vy = vy + (ymaxlim - y) * params.strength * alpha;
                    }
                }
            };
        };
        this.simulation.force('boundary', boundaryForce(
            {width: this.container.clientWidth, height: this.container.clientHeight, strength: 0.3}));
    }

    private applyChargeForce() {
        this.simulation.force("charge", d3.forceManyBody().strength(this.config.chargeStrength));
    }

    private applyCollideForce() {
        this.simulation.force("collide", d3.forceCollide<Node>()
            .radius(d => d.relSize * this.config.circleRadiusUnit));
    }

    private applyAllForces() {
        this.applyCollideForce();
        this.applyChargeForce();
        this.applyCenterForce();
        this.applyBoundaryForce();
    }
}
