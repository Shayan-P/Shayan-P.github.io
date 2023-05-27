import * as assert from "assert";

type CVInfo = {
    picture: string,
    description?: string,
    relDistance?: number;
    relSize?: number;
}

export type CVItem = {
    picture: string,
    description?: string,
    depth: number
    relDistance: number;
    relSize: number;
}

export type Tree = {
    item: CVItem,
    children: Tree[]
}

const rootItem: CVItem = {picture: "/static/images/shayan.jpeg", depth: 0, relSize: 1, relDistance: 1};
const tree = {item: rootItem, children: []};


function findItem(item: CVInfo): Tree {
    function walkTree(tree: Tree): Tree | undefined {
        if(tree.item === item)
            return tree;
        for(const subTree of tree.children) {
            const res = walkTree(subTree);
            if(res !== undefined)
                return res;
        }
        return undefined;
    }
    return walkTree(tree) ?? assert.fail();
}

function addItem(info: CVInfo, parent: CVInfo): CVInfo {
    const parentTree = findItem(parent);
    const item: CVItem = {
        description: info.description,
        picture: info.picture,
        depth: parentTree.item.depth + 1,
        relDistance: info.relDistance ?? parentTree.item.relDistance * 0.6,
        relSize: info.relSize ?? parentTree.item.relSize * 0.6
    };
    parentTree.children.push({item: item, children: []});
    return item;
}

export function getTree() {
    return tree;
}


const cvNode = addItem({
    description: "You can download a more formal resume <a href=\"/static/cv.pdf\">here</a>",
    picture: "/static/images/cv.png",
}, rootItem);

const highSchoolNode = addItem({
    description: "Studied in Shahid Dastgheib 1 HighSchool 2017-2020 (Shiraz, Iran)<br/>\
                  Taught Material of Olympiad in Informatics (Algorithms, Graph, Combinatorics, Programming in c++) 2019-2021 <br/>",
    picture: "/static/images/sampad.png"
}, rootItem);

const yscNode = addItem({
    description: "Achieved Gold medal and 1st place in 29th Iranian National Olympiad in Informatics<br/>\
                                Achieved Silver medal in 28th Iranian National Olympiad in Informatics (INOI)<br/>\
                                Became a member of young scholars club",
    picture: "/static/images/ysc.png"
}, highSchoolNode);

const apioNode = addItem({
    description: "Silver Medal, APIO 2020</br>Ranked 24th in Asia-Pacific Informatics Olympiad 2020, Indonesia",
    picture: "/static/images/apio.png"
}, highSchoolNode);


const ioiNode = addItem({
    description: "Gold Medal, IOI 2020</br>Ranked 10th in 32th International Olympiad in Informatics 2020, Singapore",
    picture: "/static/images/ioi.png"
}, highSchoolNode);

const gtoiNode = addItem({
    description: "Achieved Gold medal and 1st place in 29th Iranian National Olympiad in Informatics<br/>\
        Achieved Silver medal in 28th Iranian National Olympiad in Informatics (INOI)<br/>\
        Became a member of young scholars club",
    picture: "/static/images/ysc.png"
}, highSchoolNode);

const abarkelasNode = addItem({
    description: "Worked at <a href=\"https://abarkelas.ir/\">Abarkelas</a> as a Web-Developer (Tehran, Iran)  Oct 2020 - June 2021\
            Developed both backend and frontend using Django and NuxtJs. Set up Prometheus and Grafana for monitoring. Turned the website to PWA (Progressive Web Application).\
            <br>Abarkelas is an online live course platform to make quality education accessible for every Iranian student",
    picture: "/static/images/abarkelas.jpg",
}, rootItem);

addItem({
    picture: "/static/images/python.png"
}, abarkelasNode);
addItem({
    picture: "/static/images/django.png"
}, abarkelasNode);
addItem({
    picture: "/static/images/postgres.png"
}, abarkelasNode);
// todo change this to linux
addItem({
    picture: "/static/images/ubuntu.png"
}, abarkelasNode);
addItem({
    picture: "/static/images/docker.png",
}, abarkelasNode);
addItem({
    picture: "/static/images/nuxt.png",
}, abarkelasNode);
addItem({
    picture: "/static/images/vue.png"
}, abarkelasNode);


const freelance = addItem({
    description: "Worked as a freelancer C++ developer  Sep 2021 - March 2022",
    picture: "/static/images/freelance.jpg"
}, rootItem);

addItem({
    picture: "/static/images/cpp.png"
}, freelance);

addItem({
    picture: "/static/images/cgal.jpg"
}, freelance);

addItem({
    picture: "/static/images/cmake.png"
}, freelance);

const carriotNode = addItem({
    description: "Worked at <a href=\"https://carriot.ir/\">Carriot</a> as a Data Science Intern  (Tehran, Iran)  July 2021 - Sep 2021\ \
            Designed and developed a statistical model to parse addresses and find the corresponding \
            locations with OSM (geocoding problem). used Hidden Markov Model to do POS tagging on \
            addresses and tuned the Elastic search engine to store and retrieve the OSM data.",
    picture: "/static/images/carriot.jpg",
}, rootItem);

addItem({
    picture: "/static/images/python.png",
}, carriotNode);
addItem({
    picture: "/static/images/elastic.jpeg",
}, carriotNode);
addItem({
    picture: "/static/images/osm.png",
}, carriotNode);
addItem({
    picture: "/static/images/pandas.png",
}, carriotNode);

const sharifNode = addItem({
    description: "B.Sc. Computer Engineering, 2020-2022 (Tehran, Iran), GPA - 19.47/20",
    picture: "/static/images/sharif.jpg"
}, rootItem);

const acmNode = addItem({
    description: "ICPC 2021 World Finalist</br>Won 1st spot as a team in regional ACM-ICPC competition and was selected to participate in the world finals.",
    picture: "/static/images/acm.png"
}, sharifNode);

const socialNode = addItem({
    picture: "/static/images/social.png"
}, rootItem);

addItem({
    description: "shayanp@mit.edu",
    picture: "/static/images/email.jpg",
}, socialNode);
addItem({
    description: "<a href=\"https://www.linkedin.com/in/shayan-pardis/\">LinkedIn</a>",
    picture: "/static/images/linkedin.png",
}, socialNode);
addItem({
    description: "<a href=\"https://github.com/Shayan-P\">Github</a>",
    picture: "/static/images/github.png",
}, socialNode);
