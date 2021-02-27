/*elem = document.getElementById("myCanvas")

ctx = elem.getContext("2d")

H = window.innerHeight
W = window.innerWidth

elem.height = H
elem.width = W
*/
/*
ctx.beginPath()
ctx.moveTo(100, 100)
ctx.lineTo(100, 200)
ctx.lineTo(200, 200)
ctx.lineTo(200, 100)
ctx.stroke()

colors = ['red', 'yellow', 'black', 'blue']
randomColor = ()=>colors[Math.floor(Math.random() * 4)]
changeColor = ()=> {
  console.log("SALAM")
  ctx.beginPath()
  ctx.strokeStyle = randomColor()
  ctx.arc(300, 300, 100, Math.PI/3, Math.PI, 0)
  ctx.stroke()
}
line = (x, y, xx, yy)=> {
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 10
  ctx.moveTo(x, y)
  ctx.lineTo(xx, yy)
  ctx.stroke()
}

grd = ctx.createLinearGradient(100, 200, 500, 700);

grd.addColorStop(0, "red");
grd.addColorStop(0.5, "yellow")
grd.addColorStop(1, "blue")
ctx.fillStyle = grd
//ctx.fillRect(0, 0, W, H)

line(100, 200, 500, 700)

ctx.font = "200px Arial"
ctx.textAlign = "center";
console.log(ctx.shadowColor)
ctx.fillText("Salam", W/4, H/2)

ctx.moveTo(0, 0)
fff = ()=>{
  ctx.moveTo(300, 300)

  ctx.rotate(0.07)
  line(0, 0, 100, 100)
}
setInterval(fff, 100)

*/
/*
radius = 100
function drawClock() {
  drawFace(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  
  grad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}
ctx.translate(radius, radius)
drawClock()
*/

var canvas, ctx, w, h;
var myPoints = [];
var mySegments = []
var default_color = "black";
var shift = false

function shift_key(){
    if(shift){
        shift = false;
    }
    else{
        shift = true;
    }
}
function init() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    w = window.innerWidth;
    h = window.innerHeight - 26;
    canvas.width = w;
    canvas.height = h;

    canvas.addEventListener("mousedown", function(e) {
        drawPointAfterClick(e)
    }, false);
}

function drawPointAfterClick(e) {
    let curX = e.clientX - canvas.offsetLeft;
    let curY = e.clientY - canvas.offsetTop;
    if(shift){
        fillSame(point(curX, curY));
    }
    else{
        drawPoint(curX, curY);
    }
}

function drawPoint(x, y, c) {
    if(!c){
      c = default_color;
    }
    myPoints.push(point(x, y))
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, 2 * Math.PI);
    ctx.fillStyle = c;
    ctx.fill();
}
function drawSegment(a, b) {
    mySegments.push([a, b])
    ctx.beginPath();
    ctx.moveTo(a.X, a.Y);
    ctx.lineTo(b.X, b.Y);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
function drawRect(x, y, _w, _h){
    ctx.beginPath();
    ctx.rect(x, y, _w, _h);
    ctx.fillStyle = default_color;
    ctx.fill();
}
function fillSame(p){
    let old_cl = ctx.getImageData(p.X, p.Y, p.X+1, p.Y+1).data;
    drawRect(p.X, p.Y, 1, 1);
    let new_cl = ctx.getImageData(p.X, p.Y, p.X+1, p.Y+1).data;
    let equal = (a, b) => {
        return a[0] == b[0] && a[1] == b[1] && a[2] == b[2] && a[3] == b[3];
    }    

    if(equal(old_cl, new_cl)){
        return;
    }

    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imageData)
    let data = imageData.data;
    let getId = (x, y)=>{
        return 4 * (y * w + x);
    }
    let getPixel = (x, y) => {
        let id = getId(x, y);
        return [data[id], data[id+1], data[id+2], data[id+3]];
    }
    let changeColor = (p) => {
        let id = getId(p.X, p.Y);
        data[id] = new_cl[0];
        data[id+1] = new_cl[1];
        data[id+2] = new_cl[2];
        data[id+3] = new_cl[3];           
    }
    let qu = [p];
    let L = 0;
    while(qu.length > L){
        let p = qu[L];
        L++;
        for(let X = p.X-1; X <= p.X+1; X++){
            for(let Y = p.Y-1; Y <= p.Y+1; Y++){
                if(X >= 0 && Y >= 0 && X < w && Y < h && equal(old_cl, getPixel(X, Y))){
                    changeColor(point(X, Y));
                    qu.push(point(X, Y));
                }
            }
        }
    }

    ctx.putImageData(imageData, 0, 0);
}
function erase() {
    var m = confirm("jeddi jeddi pak konam?");
    if (m) {
        ctx.clearRect(0, 0, w, h);
        myPoints = []
    }
}
function color(obj) {
  switch (obj.id) {
      case "green":
          default_color = "green";
          break;
      case "blue":
          default_color = "blue";
          break;
      case "red":
          default_color = "red";
          break;
      case "yellow":
          default_color = "yellow";
          break;
      case "orange":
          default_color = "orange";
          break;
      case "black":
          default_color = "black";
          break;
      case "white":
          default_color = "white";
          break;
  }
}



function point(a, b) {
    return { "X": a, "Y": b };
}
function cross(a, b) {
    return a.X * b.Y - a.Y * b.X;
}

function dot(a, b) {
    return a.X * b.X + a.Y * b.Y;
}

function add(a, b) {
    return point(a.X + b.X, a.Y + b.Y);
}

function reduce(a, b) {
    return point(a.X - b.X, a.Y - b.Y);
}
function mul(a, b){
    return point(a * b.X, a * b.Y);
}
function less(a, b) {
  return a.X < b.X || (a.X === b.X && a.Y < b.Y);
}

function len2(a) {
    return dot(a, a);
}

function counter_clockwise(a, b, c) {
    let x = cross(reduce(b, a), reduce(c, a));
    if (x > 0)
        return 1;
    if (x == 0)
        return 0;
    if (x < 0)
        return -1;
}

function counter_clockwise_with_equal(a, b, c) {
    let x = cross(reduce(b, a), reduce(c, a));
    if (x > 0)
        return 1;
    if (x < 0)
        return -1;
    let l1 = len2(reduce(a, b)), l2 = len2(reduce(a, c));
    if (l1 < l2)
        return 1;
    if (l1 > l2)
        return -1;
    return 0;
}
function segmentIntersection(s1, s2){
    let [a, b] = s1;
    let [c, d] = s2;
    let AB = reduce(b, a), CD = reduce(d, c);
    let x = cross(AB, CD);
    if(x == 0)
        return false; 
    let alpha = (cross(c, CD) - cross(a, CD)) / (-x);
    let beta = (cross(a, AB) - cross(c, AB)) / (x);
    if(alpha < 0 || alpha > 1 || beta < 0 || beta > 1)
        return false;
    return add(a, mul(alpha, AB));
}
function graham_scan(pts) {
    let n = pts.length;
    for (let i = 1; i < n; i++) {
        if (less(pts[i], pts[0])){
            [pts[0], pts[i]] = [pts[i], pts[0]];
        }
    }
    let mn = pts.shift();
    pts.sort((a, b) => -counter_clockwise_with_equal(mn, a, b));
    let ans = [mn];
    for (let pt of pts) {
        while (ans.length > 1 && counter_clockwise(ans[ans.length - 2], ans[ans.length - 1], pt) != 1)
            ans.pop();
        ans.push(pt);
    }
    return ans;
}
function show_convex_hull(){
  let hull = graham_scan([...myPoints]);
  console.log(hull)
  let n = hull.length
  if(n > 1){
    for(let i = 0; i < n; i++){
      drawSegment(hull[i], hull[(i+1) % n]);   
    }
  }
}

function med(a, b){
    let p = add(a, b);
    return point(p.X/2, p.Y/2);
}
function tri(a, b, c, h){
    if(h == 5)
        return;
    drawPoint(a.X, a.Y);
    drawPoint(b.X, b.Y);
    drawPoint(c.X, c.Y);
    drawSegment(a, b);
    drawSegment(a, c);
    drawSegment(b, c);
    let AB = med(a, b);
    let AC = med(a, c);
    let BC = med(b, c);
    tri(AB, AC, a, h+1);
    tri(BC, AC, c, h+1);
    tri(AB, BC, b, h+1);
    tri(AB, AC, BC, h+1);
}

init();

tri(point(165, 45), point(456, 600), point(789, 123), 0);
