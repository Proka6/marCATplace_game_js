// var canvasContext = document.getElementById('canvas');

// var canvasContext = canvas.getContext("2d");

// var STAR = {
//     x: 200,
//     y: 200,
//     spikes: 5,
//     outerRadius: 50,
//     innerRadius: 25,
//     fillStyle: 'gold',
//     strokeStyle: 'orange',
// }


// function play() {
//     drawFrame();
//     requestAnimationFrame(play);
// }

// function drawFrame() {
//     canvasContext.clearRect(0, 0, canvasContext.width, canvasContext.height);
//     for (var i = 0; i <= CUB.width; i += 5){
//         for (var j = 0; j <= CUB.height; j += 5) {
//             drawCub(i, j);
//         }
//     }
//     drawStar(STAR.x, STAR.y, STAR.spikes, STAR.outerRadius, STAR.innerRadius, STAR.fillStyle, STAR.strokeStyle);
// } 

// function drawStar(cx, cy, spikes, outerRadius, innerRadius, fillStyle, strokeStyle) {
//     let rot = Math.PI / 2 * 3;
//     let x = cx;
//     let y = cy;
//     const step = Math.PI / spikes;

//     canvasContext.beginPath();
//     canvasContext.moveTo(cx, cy - outerRadius);
//     for (let i = 0; i < spikes; i++) {
//         x = cx + Math.cos(rot) * outerRadius;
//         y = cy + Math.sin(rot) * outerRadius;
//         canvasContext.lineTo(x, y);
//         rot += step;

//         x = cx + Math.cos(rot) * innerRadius;
//         y = cy + Math.sin(rot) * innerRadius;
//         canvasContext.lineTo(x, y);
//         rot += step;
//     }
//     canvasContext.lineTo(cx, cy - outerRadius);
//     canvasContext.closePath();
//     canvasContext.fillStyle = fillStyle;
//     canvasContext.fill();
//     canvasContext.strokeStyle = strokeStyle;
//     canvasContext.stroke();
// }

// function drawCub(width, height) {
//     canvasContext.fillStyle = CUB.fillStyle;
//     canvasContext.fillRect(CUB.x, CUB.y, width, height);
// }
// play();

var canvasContext = document.getElementById('canvas');
canvasContext.width = 1000;
canvasContext.height = 1000;
var canvasContext = canvasContext.getContext('2d');



function back() {
    canvasContext.fillStyle = '#F5F0E1';
    canvasContext.fillRect(0, 0, 1000, 1000);
}

let w = 0;
let h = 0;


var CUB = {
    x: 100,
    y: 100,
    // width: 30,
    // height: 30,
    fillStyle: 'gold',
}

function draw(width, height) {
    canvasContext.fillStyle = CUB.fillStyle;
    canvasContext.fillRect(CUB.x, CUB.y, width, height);
}

function update() {
    canvasContext.clearRect(0, 0, canvasContext.width, canvasContext.height);
    back();
    draw(w, w);
    w++; // увеличение размера
    h++;
    if ((w >= 225) && (h >= 250)) { w = 225; h = 250; }
}

function play() {
    update();
    // requestAnimationFrame(play);
    
}

 // запуск каждые 60 миллисекунд 
 setInterval(play, 30);