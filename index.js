const cv = {
    id: "root",
    delay: 200,
    radius: 60,
    picture: "images/shayan.jpeg",
    fill: "url(#root)",
    children:[
        {
            id: "cv",
            desc: "You can download a more formal resume <a href=\"static/cv.pdf\">here</a>",
            radius: 40,
            parentEdgeValue: 5,
            picture: "images/cv.png",
            fill: "url(#cv)",
            children:[
                {
                    id: "hiv",
                    desc: "Studied in Shahid Dastgheib 1 HighSchool 2017-2020 (Shiraz, Iran)<br/>\
                  Taught Material of Olympiad in Informatics (Algorithms, Graph, Combinatorics, Programming in c++) 2019-2021 <br/>",
                    parentEdgeValue: 7,
                    radius: 30,
                    picture: "images/sampad.png",
                    fill: "url(#hiv)",
                    children: [
                        {
                            id: "YSC",
                            desc: "Achieved Gold medal and 1st place in 29th Iranian National Olympiad in Informatics<br/>\
                                Achieved Silver medal in 28th Iranian National Olympiad in Informatics (INOI)<br/>\
                                Became a member of young scholars club",
                            parentEdgeValue: 7,
                            radius: 30,
                            picture: "images/ysc.png",
                            fill: "url(#YSC)",
                            children: [
                                {
                                    id: "APIO",
                                    desc: "Silver Medal, APIO 2020</br>Ranked 24th in Asia-Pacific Informatics Olympiad 2020, Indonesia",
                                    parentEdgeValue: 7,
                                    radius: 30,
                                    picture: "images/apio.png",
                                    fill: "url(#APIO)",
                                    children: []
                                },
                                {
                                    id: "IOI",
                                    desc: "Gold Medal, IOI 2020</br>Ranked 10th in 32th International Olympiad in Informatics 2020, Singapore",
                                    parentEdgeValue: 7,
                                    radius: 30,
                                    picture: "images/ioi.png",
                                    fill: "url(#IOI)",
                                    children: []
                                }
                            ]
                        },
                        {
                            id: "GTOI",
                            desc: "Achieved Gold medal and 1st place in 29th Iranian National Olympiad in Informatics<br/>\
                                Achieved Silver medal in 28th Iranian National Olympiad in Informatics (INOI)<br/>\
                                Became a member of young scholars club",
                            parentEdgeValue: 7,
                            radius: 30,
                            picture: "images/ysc.png",
                            fill: "url(#GTOI)",
                            children: [] // continue here
                        }
                    ]
                },
                {
                    id: "abarkelas",
                    desc: "Worked at <a href=\"https://abarkelas.ir/\">Abarkelas</a> as a Web-Developer (Tehran, Iran)  Oct 2020 - June 2021\
                            Developed both backend and frontend using Django and NuxtJs. Set up Prometheus and Grafana for monitoring. Turned the website to PWA (Progressive Web Application).\
                            <br>Abarkelas is an online live course platform to make quality education accessible for every Iranian student",
                    delay: 2500,
                    parentEdgeValue: 7,
                    radius: 40,
                    picture: "images/abarkelas.jpg",
                    fill: "url(#abarkelas)",
                    children: [
                        {
                            id: "python",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/python.png",
                            fill: "url(#python)",
                            children: []
                        },
                        {
                            id: "django",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/django.png",
                            fill: "url(#django)",
                            children: []
                        },
                        {
                            id: "postgres",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/postgres.png",
                            fill: "url(#postgres)",
                            children: []
                        },
                        {
                            id: "ubuntu",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/ubuntu.png",
                            fill: "url(#ubuntu)",
                            children: []
                        },
                        {
                            id: "docker",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/docker.png",
                            fill: "url(#docker)",
                            children: []
                        },
                        {
                            id: "nuxt",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/nuxt.png",
                            fill: "url(#nuxt)",
                            children: []
                        },
                        {
                            id: "vue",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/vue.png",
                            fill: "url(#vue)",
                            children: []
                        }
                    ]
                },
                {
                    id: "freelance",
                    desc: "Worked as a freelancer C++ developer  Sep 2021 - March 2022",
                    delay: 2500,
                    parentEdgeValue: 7,
                    radius: 40,
                    picture: "images/freelance.jpg",
                    fill: "url(#freelance)",
                    children: [
                        {
                            id: "cpp",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/cpp.png",
                            fill: "url(#cpp)",
                            children: []
                        },

                        {
                            id: "cgal",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/cgal.jpg",
                            fill: "url(#cgal)",
                            children: []
                        },

                        {
                            id: "cmake",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/cmake.png",
                            fill: "url(#cmake)",
                            children: []
                        },
                    ]
                },
                {
                    id: "carriot",
                    desc: "Worked at <a href=\"https://carriot.ir/\">Carriot</a> as a Data Science Intern  (Tehran, Iran)  July 2021 - Sep 2021\ \
                            Designed and developed a statistical model to parse addresses and find the corresponding \
                            locations with OSM (geocoding problem). used Hidden Markov Model to do POS tagging on \
                            addresses and tuned the Elastic search engine to store and retrieve the OSM data.",
                    delay: 2500,
                    parentEdgeValue: 7,
                    radius: 40,
                    picture: "images/carriot.jpg",
                    fill: "url(#carriot)",
                    children: [
                        {
                            id: "python-2",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/python.png",
                            fill: "url(#python-2)",
                            children: []
                        },
                        {
                            id: "elastic",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/elastic.jpeg",
                            fill: "url(#elastic)",
                            children: []
                        },
                        {
                            id: "osm",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/osm.png",
                            fill: "url(#osm)",
                            children: []
                        },
                        {
                            id: "pandas",
                            parentEdgeValue: 1,
                            radius: 20,
                            picture: "images/pandas.png",
                            fill: "url(#pandas)",
                            children: []
                        },
                    ]
                },
                {
                    id: "sharif",
                    desc: "B.Sc. Computer Engineering, 2020-2022 (Tehran, Iran), GPA - 19.47/20",
                    parentEdgeValue: 7,
                    radius: 40,
                    picture: "images/sharif.jpg",
                    fill: "url(#sharif)",
                    children: [
                        {
                            id: "acm",
                            desc: "ICPC 2021 World Finalist</br>Won 1st spot as a team in regional ACM-ICPC competition and was selected to participate in the world finals.",
                            parentEdgeValue: 7,
                            radius: 30,
                            picture: "images/acm.png",
                            fill: "url(#acm)",
                            children: []
                        }
                    ]
                },
            ]
        },
        {
            id: "social",
            parentEdgeValue: 7,
            radius: 50,
            picture: "images/social.png",
            fill: "url(#social)",
            children: [
                {
                    id: "email",
                    desc: "shayanp@mit.edu",
                    parentEdgeValue: 7,
                    radius: 20,
                    picture: "images/email.jpg",
                    fill: "url(#email)",
                    children: []
                },
                {
                    id: "linkedin",
                    desc: "<a href=\"https://www.linkedin.com/in/shayan-pardis/\">LinkedIn</a>",
                    parentEdgeValue: 7,
                    radius: 20,
                    picture: "images/linkedin.png",
                    fill: "url(#linkedin)",
                    children: []
                },
                {
                    id: "github",
                    desc: "<a href=\"https://github.com/Shayan-P\">Github</a>",
                    parentEdgeValue: 7,
                    radius: 20,
                    picture: "images/github.png",
                    fill: "url(#github)",
                    children: []
                }
            ]
        }
    ]
}

var graph;
var hideTimer;
var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {
        return  d.desc;
    })
function myGraph() {

    // Add and remove elements on the graph object
    this.addNode = function (vertex) {
        nodes.push(vertex);
        update();
    };

    this.removeNode = function (id) {
        var i = 0;
        var n = findNode(id);
        while (i < links.length) {
            if ((links[i]['source'] == n) || (links[i]['target'] == n)) {
                links.splice(i, 1);
            }
            else i++;
        }
        nodes.splice(findNodeIndex(id), 1);
        update();
    };

    this.removeLink = function (source, target) {
        for (var i = 0; i < links.length; i++) {
            if (links[i].source.id == source && links[i].target.id == target) {
                links.splice(i, 1);
                break;
            }
        }
        update();
    };

    this.removeallLinks = function () {
        links.splice(0, links.length);
        update();
    };

    this.removeAllNodes = function () {
        nodes.splice(0, links.length);
        update();
    };

    this.addLink = function (source, target, value) {
        links.push({"source": findNode(source), "target": findNode(target), "value": value});
        update();
    };

    var findNode = function (id) {
        for (var i in nodes) {
            if (nodes[i]["id"] === id) return nodes[i];
        }
        ;
    };

    var findNodeIndex = function (id) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].id == id) {
                return i;
            }
        }
        ;
    };

    // set up the D3 visualisation in the specified element

    var color = d3.scale.category10();

    var mainSVG = d3.select("body")
        .append("svg:svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("id", "svg")
        .attr("pointer-events", "all")
        .attr("perserveAspectRatio", "xMinYMid")

    function addImagePattern(vertex)
    {
        vertex.children.forEach(addImagePattern)
        if(vertex.picture==undefined)return;
        mainSVG.append("defs")
            .append('pattern')
            .attr('id', vertex.id)
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('x', -vertex.radius)
            .attr('y', -vertex.radius)
            .attr('width', vertex.radius*2)
            .attr('height', vertex.radius*2)
            .append("image")
            .attr("xlink:href", vertex.picture)
            .attr('width', vertex.radius*2)
            .attr('height', vertex.radius*2);
    }
    addImagePattern(cv);


    var vis = mainSVG.append('svg:g');

    var force = d3.layout.force();

    var nodes = force.nodes(),
        links = force.links();


    mainSVG.call(tip);

    var update = function () {
        var link = vis.selectAll("line")
            .data(links, function (d) {
                return d.source.id + "-" + d.target.id;
            });

        link.enter().append("line")
            .attr("id", function (d) {
                return d.source.id + "-" + d.target.id;
            })
            .attr("stroke-width", function (d) {
                return d.value / 10;
            })
            .attr("class", "link");
        link.append("title")
            .text(function (d) {
                return d.value;
            });
        link.exit().remove();

        var node = vis.selectAll("g.node")
            .data(nodes, function (d) {
                return d.id;
            });

        var nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .call(force.drag);


        nodeEnter.append("svg:circle")
            .attr("r", function(x){return x.radius})
            .attr("id", function (x) {return "Node;" + x.id;})
            .attr("class", "nodeStrokeClass")
            .attr("stroke", "gray")
            .attr("stroke-width", "2")
            .attr("fill", function (x) {return x.fill;})
            .on('mouseover', function(vertex)
            {
                if(vertex.desc!=undefined)
                    tip.show(vertex)
            })
            .on('mouseout', function(vertex){
                clearTimeout(hideTimer);
                hideTimer = setTimeout(function(){
                    tip.hide(vertex);
                }, 2300);
            })
        //.attr("fill", function(d) { return color(d.id); });

        node.exit().remove();

        force.on("tick", function () {

            node.attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

            link.attr("x1", function (d) {
                return d.source.x;
            })
                .attr("y1", function (d) {
                    return d.source.y;
                })
                .attr("x2", function (d) {
                    return d.target.x;
                })
                .attr("y2", function (d) {
                    return d.target.y;
                });
        });

        // Restart the force layout.
        //console.log([document.getElementById("svg").getBBox().width, document.getElementById("svg").getBBox().height])
        svgDiv = document.getElementsByTagName('body')[0]
        force
            .size([svgDiv.clientWidth,svgDiv.clientHeight])
            .charge(-2200)
            .linkDistance( function(d) { return d.value * 3 } )
            .start();
    };


    // Make it all go
    update();
}

function drawGraph() {

    graph = new myGraph("#svgdiv");

    function addNodeWithFather(vertex, father){
        graph.addNode(vertex);
        if(father!=undefined){
            graph.addLink(father.id, vertex.id, vertex.parentEdgeValue);
        }
        keepNodesOnTop();
    }

    var globalDelay = 0;
    var DEFAULT_DELAY = 1000;
    function processNode(vertex, father)
    {
        if(vertex.hasOwnProperty('delay'))
            globalDelay += vertex.delay;
        else
            globalDelay += DEFAULT_DELAY;
        setTimeout(function(){
            addNodeWithFather(vertex, father);
        },globalDelay);
        vertex.children.forEach(function(x){processNode(x,vertex)})
    }

    processNode(cv);

}

drawGraph();

// because of the way the network is created, nodes are created first, and links second,
// so the lines were on top of the nodes, this just reorders the DOM to put the svg:g on top
function keepNodesOnTop() {
    $(".nodeStrokeClass").each(function( index ) {
        var gnode = this.parentNode;
        gnode.parentNode.appendChild(gnode);
    });
}
function addNodes() {
    d3.select("svg")
        .remove();
    drawGraph();
}
