import {GraphVisualizer} from "./visualization";
import {select, text, window} from "d3";
import * as assert from "assert";
import {getTree, Tree} from "./data";
import {Node} from "./visualization";
import {timeout} from "./concurrancyUtils";

const svg = select('body')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%');

const vis = new GraphVisualizer(svg.node() ?? assert.fail());

const averageDelayBetween = 600;

let counter = 0;
const map = new Map<Tree, Node>();
function getNode(tree: Tree): Node {
    const res = map.get(tree);
    if(res !== undefined)
        return res;
    const newNode = {
        id: counter.toString(),
        image: tree.item.picture,
        relDistance: tree.item.relDistance,
        relSize: tree.item.relSize,
        description: tree.item.description ?? ""
    };
    counter += 1;
    map.set(tree, newNode);
    return newNode;
}

async function walkTree(parent: Node|undefined, tree: Tree): Promise<void> {
    vis.addNode(getNode(tree));
    if(parent !== undefined)
        vis.addLink({source: parent, target: getNode(tree)});
    for(const child of tree.children) {
        await timeout(Math.random() * averageDelayBetween * 2);
        await walkTree(getNode(tree), child);
    }
}

async function constructTree(tree: Tree): Promise<void> {
    await walkTree(undefined, tree);
}

constructTree(getTree()).catch(console.error);