import {select} from "d3";
import {Node} from "./visualization";

export class Tooltip {

    data: string = '';
    node= this.initTipNode();
    bx: number;
    by: number;

    public constructor() {
        select(this.node).attr('class', 'd3-tip');
        this.bx = 0
        this.by = 0
    }
    initTipNode() {
    let div = select(document.createElement('div'))
        div
            .style('position', 'absolute')
            .style('top', 0)
            .style('opacity', 0)
            .style('pointer-events', 'none')
            .style('box-sizing', 'border-box')

        return div.node()
    }

    show() {
        let selected = this.getNode()

        selected.innerHTML = this.data

        let top = this.by - selected.clientHeight < 0 ? 0 : this.by - selected.clientHeight;
        let left = this.bx - selected.clientWidth / 2 < 0 ? 0 : this.bx - selected.clientWidth / 2;

        select(this.node)
            .style('top', top + 'px')
            .style('left', left + 'px')
            .style('opacity', 1)
            .style('pointer-events', 'all')
    }

    hide() {
        let selected = select(this.node)
        selected
            .style('opacity', 0)
            .style('pointer-events', 'none')
    }

    setData(event: any, d: Node, radiusUnit:number) {
        this.data = d.description;
        if (d.x != null) {
            this.bx = d.x
        }
        if (d.y != null) {
            this.by = d.y - d.relSize * radiusUnit * 1.4
        }
    }

    getNode():HTMLDivElement {
        if (this.node == null) {
            this.node = this.initTipNode()
        }
        return <HTMLDivElement>this.node
    }
}