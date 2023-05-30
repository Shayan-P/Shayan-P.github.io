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

const rootItem: CVItem = {picture: "/static/images/shayan.jpg", depth: 0, relSize: 1, relDistance: 1};
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
        relSize: info.relSize ?? parentTree.item.relSize * 0.65
    };
    parentTree.children.push({item: item, children: []});
    return item;
}

export function getTree() {
    return tree;
}


const cvNode = addItem({
    description: "You can download a more formal resume <a href=\"/static/cv.pdf\">here</a>",
    picture: "/static/images/cv.jpg",
}, rootItem);

const highSchoolNode = addItem({
    description: "Studied in Shahid Dastgheib 1 HighSchool 2017-2020 (Shiraz, Iran)<br/>\
                  Taught Material of Olympiad in Informatics (Algorithms, Graph, Combinatorics, Programming in c++) 2019-2021 <br/>",
    picture: "/static/images/sampad.jpg"
}, rootItem);

const yscNode = addItem({
    description: "Achieved Gold medal and 1st place in 29th Iranian National Olympiad in Informatics<br/>\
                                Achieved Silver medal in 28th Iranian National Olympiad in Informatics (INOI)<br/>\
                                Became a member of young scholars club",
    picture: "/static/images/ysc.jpg"
}, highSchoolNode);

const apioNode = addItem({
    description: "Silver Medal, APIO 2020</br>Ranked 24th in Asia-Pacific Informatics Olympiad 2020, Indonesia",
    picture: "/static/images/apio.jpg"
}, highSchoolNode);


const ioiNode = addItem({
    description: "Gold Medal, IOI 2020</br>Ranked 10th in 32th International Olympiad in Informatics 2020, Singapore",
    picture: "/static/images/ioi.jpg",
}, highSchoolNode);

const gtoiNode = addItem({
    description: "Coordinated and contributed in writing the book <a href='http://gtoi.shaazzz.ir/'>GTOI (Graph Theory for Olympiad in informatics)</a><br>" +
        "which soon became a popular reference that helps many students learn graph theory in an algorithmic approach.<br>" +
        "The book is publically available online, and it is written in Persian.",
    picture: "/static/images/gtoi.jpg"
}, highSchoolNode);

const abarkelasNode = addItem({
    description: "Worked at <a href=\"https://abarkelas.ir/\">Abarkelas</a> as a Web-Developer (Tehran, Iran)  Oct 2020 - June 2021<br/>\
            Developed both backend and frontend using Django and NuxtJs.<br/>\
            Set up Prometheus and Grafana for monitoring.<br/>\
            Turned the website to PWA (Progressive Web Application).<br/>\
            <br>Abarkelas is an online live course platform to make quality education accessible for every Iranian student",
    picture: "/static/images/abarkelas.jpg",
}, rootItem);

addItem({
    description: "python",
    picture: "/static/images/python.jpg"
}, abarkelasNode);
addItem({
    description: "django",
    picture: "/static/images/django.jpg"
}, abarkelasNode);
addItem({
    description: "postgres",
    picture: "/static/images/postgres.jpg"
}, abarkelasNode);
addItem({
    description: "linux server",
    picture: "/static/images/ubuntu.jpg"
}, abarkelasNode);
addItem({
    description: "docker",
    picture: "/static/images/docker.jpg",
}, abarkelasNode);
addItem({
    description: "nuxt",
    picture: "/static/images/nuxt.jpg",
}, abarkelasNode);
addItem({
    description: "vue",
    picture: "/static/images/vue.jpg"
}, abarkelasNode);


const freelance = addItem({
    description: "Worked as a freelancer C++ developer  Sep 2021 - March 2022",
    picture: "/static/images/freelance.jpg"
}, rootItem);

addItem({
    description: "c++",
    picture: "/static/images/cpp.jpg"
}, freelance);

addItem({
    description: "<a href='https://www.cgal.org/'>CGAL</a>: Computational Geometry Algorithms Library",
    picture: "/static/images/cgal.jpg"
}, freelance);

addItem({
    description: "postgres",
    picture: "/static/images/cmake.jpg"
}, freelance);

const carriotNode = addItem({
    description: "Worked at <a href=\"https://carriot.ir/\">Carriot</a> as a Data Science Intern  (Tehran, Iran)  July 2021 - Sep 2021\<br/>\
            Designed and developed a statistical model to parse addresses and find the corresponding<br/>\
            locations with OSM (geocoding problem). used Hidden Markov Model to do POS tagging on <br/>\
            addresses and tuned the Elastic search engine to store and retrieve the OSM data.",
    picture: "/static/images/carriot.jpg",
}, rootItem);

addItem({
    description: "python",
    picture: "/static/images/python.jpg",
}, carriotNode);
addItem({
    description: "elastic search",
    picture: "/static/images/elastic.jpg",
}, carriotNode);
addItem({
    description: "osm: open source map",
    picture: "/static/images/osm.jpg",
}, carriotNode);
addItem({
    description: "pandas: Python Data Analysis Library",
    picture: "/static/images/pandas.jpg",
}, carriotNode);

const sharifNode = addItem({
    description: "Sharif University of Technology (Tehran, Iran)<br>" +
        "B.Sc. Computer Engineering, 2020-2022<br>" +
        "GPA - 19.47/20",
    picture: "/static/images/sharif.jpg"
}, rootItem);

const acmNode = addItem({
    description: "ICPC 2021 World Finalist</br>" +
        "Won 1st spot as a team in regional ACM-ICPC competition <br/>" +
        "and was selected to participate in the world finals.",
    picture: "/static/images/acm.jpg"
}, sharifNode);

const socialNode = addItem({
    picture: "/static/images/social.jpg"
}, rootItem);

addItem({
    description: "shayanp@mit.edu",
    picture: "/static/images/email.jpg",
}, socialNode);
addItem({
    description: "<a href=\"https://www.linkedin.com/in/shayan-pardis/\">LinkedIn</a>",
    picture: "/static/images/linkedin.jpg",
}, socialNode);
addItem({
    description: "<a href=\"https://github.com/Shayan-P\">Github</a>",
    picture: "/static/images/github.jpg",
}, socialNode);
addItem({
    description: "<a href='https://codeforces.com/profile/Shayan.P'>Codeforces</a>",
    picture: "/static/images/codeforces.jpg",
}, socialNode);


const mitNode = addItem({
    description: "Massachusetts Institute of Technology (Cambridge, MA)<br>" +
        "B.Sc. Computer Science and Engineering (6-3), 2022-2025<br>" +
        "GPA - 5.0/5.0<br>",
    picture: "/static/images/mit.jpg"
}, rootItem);
