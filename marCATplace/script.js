var BACKGROUND = {
    width: 1520,
    height: 820,
    color: '#F5F0E1',
    x: 0,
    y: 0,
    isBackground: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
}

var BACKGROUND1 = {
    width: 1520,
    height: 820,
    color: '#F5F0E1',
    x: 0,
    y: 0,
    isBackground1: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
}

var FON = {
    width: 1520,
    height: 820,
    color: '#F5F0E1',
    x: 0,
    y: 0,
    isFon: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
}

var BACKGROUND2 = {
    width: 1520,
    height: 820,
    color: '#F5F0E1',
    x: 0,
    y: 0,
    isBackground2: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
}

var BUTTONPLAY = {
    width: 200,
    height: 75,
    color: 'purple',
    x: ((BACKGROUND.width / 2) - 150),
    y: ((BACKGROUND.height / 2) - 80),
    isPlay: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
}

var CAT = {
    width: 200,
    height: 220,
    color: '#FF7F50',
    x: ((BACKGROUND.width / 2) - 50),
    y: ((BACKGROUND.height / 1.4) - 270),
    isCat: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
}
var TABLE = {
    width: 1000,
    height: 450,
    color: '#B0E0E6',
    x: (BACKGROUND.width - 1000),
    y: (BACKGROUND.height - 450),
    isTable: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
}

var PHONE = {
    width: 35,
    height: 80,
    color: 'grey',
    x: ((BACKGROUND.width / 2.1) + CAT.width - 20),
    y: ((BACKGROUND.height / 1.5) - 80),
    isPhone: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
}

var TEXT = {
    width: 60,
    height: 35,
    color: 'purple',
    colorStroke: 'white',
    isText: true,
    img: new Image(),
    size: 80,
}

var DOOR = {
    width: 250,
    height: 500,
    color: 'purple',
    x: 0,
    y: (BACKGROUND.height - 500),
    isDoor: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
}

var BACKBUTTON = {
    width: 100,
    height: 100,
    color: 'red',
    x: (BACKGROUND.width - 100),
    y: (BACKGROUND.height - 100),
    isBack: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
}

var BOX = {
    width: 100,
    height: 72,
    color: 'purple',
    x: ((BACKGROUND.width / 2) - 100),
    y: ((BACKGROUND.height / 1.5) - 72),
    isBox: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
}

var BOX1 = {
    width: 100,
    height: 72,
    color: 'purple',
    x: ((BACKGROUND.width / 2) - 150),
    y: ((BACKGROUND.height / 1.8) - 50),
    isBox: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
    number: 1,
}

var BOX2 = {
    width: 100,
    height: 72,
    color: 'purple',
    x: ((BACKGROUND.width / 2)),
    y: ((BACKGROUND.height / 2) + 50),
    isBox: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
    number: 2,
}

var BOX3 = {
    width: 100,
    height: 72,
    color: 'purple',
    x: ((BACKGROUND.width / 2)),
    y: ((BACKGROUND.height / 2.8) - 45),
    isBox: true,
    img: new Image(),
    imgIsLoad: false,
    count: 0,
    explosion: false,
    size: 80,
    number: 3,
}

var TEXTBOX = {
    color: 'white',
    isTextBox: true,
    width: 30,
    height: 80,
    color: 'purple',
    colorStroke: 'white',
    img: new Image(),
    size: 80,
}

//надо создать список звёзд с помощью for
// for (var i = 0; i < GAME.currentScreen.length; i++) {
//         draw(GAME.currentScreen[i]);
//     }


// var stars = []
// var n = 50
// for (var i = 0; i < 6; i++) {
//     c = c + 70
//     var i = {
//     x: 50,
//     y: 50,
//     outerRadius: 35,
//     innerRadius: 15,
//     spikes: 5,
//     fillColor: 'gold',
//     strokeColor: 'orange',
// }
// }

var STAR1 = {
    x: 50,
    y: 50,
    outerRadius: 35,
    innerRadius: 15,
    spikes: 5,
    fillColor: 'gold',
    strokeColor: 'orange',
}

var STAR2 = {
    x: 120,
    y: 50,
    outerRadius: 35,
    innerRadius: 15,
    spikes: 5,
    fillColor: 'gold',
    strokeColor: 'orange',
}

var STAR3 = {
    x: 190,
    y: 50,
    outerRadius: 35,
    innerRadius: 15,
    spikes: 5,
    fillColor: 'gold',
    strokeColor: 'orange',
}

var STAR4 = {
    x: 260,
    y: 50,
    outerRadius: 35,
    innerRadius: 15,
    spikes: 5,
    fillColor: 'gold',
    strokeColor: 'orange',
}

var STAR5 = {
    x: 330,
    y: 50,
    outerRadius: 35,
    innerRadius: 15,
    spikes: 5,
    fillColor: 'gold',
    strokeColor: 'orange',
}

var STARS = {
    stars: [STAR1, STAR2, STAR3, STAR4, STAR5],
    isStar: true,
}

var CURSOR = {
    width: 55,
    height: 90,
    color: 'purple',
    x: ((BACKGROUND.width / 2) - 100),
    y: ((BACKGROUND.height / 3) - 100),
    isCursor: true,
    img: new Image(),
    explosion: false,
    imgIsLoad: false,
    count: 0,
    size: 80,
}

var GAME = {
    width: 1520,
    height: 820,
    startScreen: [BACKGROUND, BUTTONPLAY],
    pvzScreen: [BACKGROUND1, CAT, TABLE, PHONE, DOOR, CURSOR, STARS],
    pvzScreenNoPhone: [BACKGROUND1, CAT, TABLE, DOOR, STARS],
    pvzScreenWithNumber: [BACKGROUND1, CAT, TABLE, PHONE, DOOR, TEXT, CURSOR, STARS],
    pvzScreenWithBox: [BACKGROUND1, CAT, TABLE, DOOR, BOX, STARS, FON],
    warehouseScreen: [BACKGROUND2, BOX1, BOX2, BOX3, BACKBUTTON, TEXTBOX],
    warehouseNoBox1: [BACKGROUND2, BOX2, BOX3, BACKBUTTON, TEXTBOX],
    warehouseNoBox2: [BACKGROUND2, BOX1, BOX3, BACKBUTTON, TEXTBOX],
    warehouseNoBox3: [BACKGROUND2, BOX1, BOX2, BACKBUTTON, TEXTBOX],
    endScreen: [BACKGROUND, STARS],
    currentScreen: [BACKGROUND, BUTTONPLAY],
    buttons: ['phone', 'door', 'box', 'back', 'cat'],

}

var canvasContext = document.getElementById('canvas');
canvasContext.width = BACKGROUND.width;
canvasContext.height = BACKGROUND.height;
var canvasContext = canvasContext.getContext('2d');
var drawStatus;
var currentButton = 0;
// animation
var wCat = Math.floor(CAT.width / 10);
var hCat = Math.floor(CAT.height / 10);
var wPhone = Math.floor(PHONE.width / 10);
var hPhone = Math.floor(PHONE.height / 10);

// image
var imageBackground = './picture/fon.png';
var imagePlay = './picture/play.png';
var imageBackground1 = "./picture/fon1.png";
var imageCatA = './picture/a.png';
var imageCatWheels = './picture/wheels.png';
var imageCatBoo = './picture/boo.png';
var imageCatFolga = './picture/folga.png';
var imageTable = './picture/table.png';
var imagePhone = './picture/phone.png';
var imageDoor = './picture/door.png';
var imageBackground2 = './picture/fon2.png';
var imageBox = './picture/box.png';
var imageBack = './picture/back.png';
var imageCursor = './picture/cursor.png';
var imageFon = './picture/prozrachnost.png';
var cats = [imageCatA, imageCatWheels, imageCatFolga, imageCatBoo];
var n = 0;
// number

var qrcod = getRandomInt(100);
var number1 = getRandomInt(100);
var number2 = getRandomInt(100);
var randomBox = getRandomInt(3);
var boxes = 0;
console.log(qrcod, number1, number2);
function numbers() {
    qrcod = getRandomInt(100);
    number1 = getRandomInt(100);
    number2 = getRandomInt(100);
    var randomBox = getRandomInt(3);
    if (randomBox === 0) {
        randomBox = getRandomInt(3);
    }
    if (randomBox === 1) {
        boxes = 1;
    }
    if (randomBox === 2) {
        boxes = 2;
    }
    if (randomBox === 3) {
        boxes = 3;
    }
    console.log(qrcod, number1, number2);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function initAnimation(object, image) {
    object.img.src = image;
    object.img.onload = () => {
        object.imgIsLoad = true;
    }
}

function play() {
    drawScreen();
    // drawStatus = requestAnimationFrame(play);
}

function drawScreen() {
    canvasContext.clearRect(0, 0, BACKGROUND.width, BACKGROUND.height);
    for (var i = 0; i < GAME.currentScreen.length; i++) {
        draw(GAME.currentScreen[i]);
    }
}

function draw(object) {
    if ((object.isStar)) {
        if (randomBox === boxes) {
            for (var s = 0; s < STARS.stars.length; s++) {
                drawStar(STARS.stars[s].x, STARS.stars[s].y, STARS.stars[s].spikes, STARS.stars[s].outerRadius, STARS.stars[s].innerRadius, STARS.stars[s].fillColor, STARS.stars[s].strokeColor);
            }
        }
        else {
            for (var s = 0; s < STARS.stars.length - 1; s++) {
                drawStar(STARS.stars[s].x, STARS.stars[s].y, STARS.stars[s].spikes, STARS.stars[s].outerRadius, STARS.stars[s].innerRadius, STARS.stars[s].fillColor, STARS.stars[s].strokeColor);
            }
        }
    }
    else if (object.isText) {
        drawTextPhone();
    }
    else if (object.isTextBox) {
        if (randomBox === 1) {
            drawText(BOX1, qrcod);
            drawText(BOX2, number1);
            drawText(BOX3, number2);
        }
        if (randomBox === 2) {
            drawText(BOX2, qrcod);
            drawText(BOX1, number1);
            drawText(BOX3, number2);
        }
        if (randomBox === 3) {
            drawText(BOX3, qrcod);
            drawText(BOX1, number1);
            drawText(BOX2, number2);
        }
    }
    else if ((object.imgIsLoad) && (!(object.isCat)) && (!(object.isPhone))) {
        canvasContext.drawImage(object.img, object.x, object.y)
    }
    else if ((object.isCat)) {
        canvasContext.drawImage(object.img, object.x, object.y, wCat, hCat)
        wCat++;
        hCat++;
        if ((wCat >= CAT.width) && (hCat >= CAT.height)) { wCat = CAT.width; hCat = CAT.height; }
    }
    else if ((object.isPhone)) {
        canvasContext.drawImage(object.img, object.x, object.y, wPhone, hPhone)
        wPhone++;
        hPhone++;
        if ((wPhone >= PHONE.width) && (hPhone >= PHONE.height)) { wPhone = PHONE.width; hPhone = PHONE.height; }
    }
    else {
        canvasContext.fillStyle = object.color;
        canvasContext.fillRect(object.x, object.y, object.width, object.height);
    }
}

function drawStar(cx, cy, spikes, outerRadius, innerRadius, fillStyle, strokeStyle) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    canvasContext.beginPath();
    canvasContext.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        canvasContext.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        canvasContext.lineTo(x, y);
        rot += step;
    }
    canvasContext.lineTo(cx, cy - outerRadius);
    canvasContext.closePath();
    canvasContext.fillStyle = fillStyle;
    canvasContext.fill();
    canvasContext.strokeStyle = strokeStyle;
    canvasContext.stroke();
}

function drawTextPhone() {
    canvasContext.fillStyle = TEXT.colorStroke;
    canvasContext.fillRect(PHONE.x - 3, PHONE.y + PHONE.height + 25, TEXT.width, TEXT.height);
    canvasContext.font = '35px serif';
    canvasContext.fillStyle = TEXT.color;
    canvasContext.fillText(qrcod, PHONE.x, PHONE.y + PHONE.height + 55);

}

function drawText(object, number) {
    canvasContext.fillStyle = TEXTBOX.colorStroke;
    canvasContext.fillRect(object.x - 3, object.y + object.height + 8, TEXT.width, TEXT.height);
    canvasContext.font = '32px serif';
    canvasContext.fillStyle = TEXTBOX.color;
    canvasContext.fillText(number, object.x, object.y + object.height + 35);
}

function onCanvasMouseMove(event) {
    CURSOR.x = event.clientX;
    CURSOR.y = event.clientY;
    clampCursorPosition();
}

function clampCursorPosition() {
    if (CURSOR.x < 0) {
        CURSOR.x = 0;
    }
    if (CURSOR.x + CURSOR.width > GAME.width) {
        CURSOR.x = GAME.width - CURSOR.width;
    }
    if (CURSOR.y < 0) {
        CURSOR.y = 0;
    }
    if (CURSOR.y + CURSOR.height > GAME.height) {
        CURSOR.y = GAME.height - CURSOR.height;
    }
}

function isOnButton(event, object) {
    if ((event.x >= object.x) && (event.x <= object.x + object.width) && (event.y >= object.y) && (event.y <= object.y + object.height)) {
        return true;
    }
    return false;
}
let c = 0;
let screen = 0;
function openButton(event, object) {
    if (isOnButton(event, object)) {
        cancelAnimationFrame(drawStatus);
        if (object === BUTTONPLAY) {
            GAME.currentScreen = GAME.pvzScreen;
        }

        initAnimation(CAT, cats[c]);
        if ((object === PHONE) && (GAME.buttons[currentButton] === 'phone')) {
            GAME.currentScreen = GAME.pvzScreenWithNumber;
            currentButton = (currentButton + 1) % GAME.buttons.length;
            console.log('mew');
        }
        if ((object === DOOR) && (GAME.buttons[currentButton] === 'door')) {
            GAME.currentScreen = GAME.warehouseScreen;
            currentButton = (currentButton + 1) % GAME.buttons.length;
            console.log('mew');
        }
        if ((object === BOX1) && (GAME.buttons[currentButton] === 'box')) {
            GAME.currentScreen = GAME.warehouseNoBox1;
            currentButton = (currentButton + 1) % GAME.buttons.length;
            boxes = 1;
            console.log('mew1');
        }
        if ((object === BOX2) && (GAME.buttons[currentButton] === 'box')) {
            GAME.currentScreen = GAME.warehouseNoBox2;
            currentButton = (currentButton + 1) % GAME.buttons.length;
            boxes = 2;
            console.log('mew2');
        }
        if ((object === BOX3) && (GAME.buttons[currentButton] === 'box')) {
            GAME.currentScreen = GAME.warehouseNoBox3;
            currentButton = (currentButton + 1) % GAME.buttons.length;
            boxes = 3;
            console.log('mew3');
        }
        if ((object === BACKBUTTON) && (GAME.buttons[currentButton] === 'back')) {
            GAME.currentScreen = GAME.pvzScreenNoPhone;
            currentButton = (currentButton + 1) % GAME.buttons.length;
            console.log('mew');
        }
        if ((object === CAT) && (GAME.buttons[currentButton] === 'cat')) {
            initAnimation(CAT, cats[c]);
            GAME.currentScreen = GAME.pvzScreenWithBox;
            currentButton = (currentButton + 1) % GAME.buttons.length;
            console.log('mew');
            c++;
            screen++;
            console.log(screen);
            numbers();
        }
        if (object === FON) {
            
            initAnimation(CAT, cats[c]);
            GAME.currentScreen = GAME.pvzScreen;
            console.log('mew');
            
        }
        
        if (screen === 3) {
            GAME.currentScreen = GAME.endScreen;
        }
        play();
    }
}

function initEventsListeners() {
    window.addEventListener('mousemove', onCanvasMouseMove);
    window.addEventListener('click', (event) => openButton(event, BUTTONPLAY));
    window.addEventListener('click', (event) => openButton(event, PHONE));
    window.addEventListener('click', (event) => openButton(event, DOOR));
    window.addEventListener('click', (event) => openButton(event, BOX1));
    window.addEventListener('click', (event) => openButton(event, BOX2));
    window.addEventListener('click', (event) => openButton(event, BOX3));
    window.addEventListener('click', (event) => openButton(event, BACKBUTTON));
    window.addEventListener('click', (event) => openButton(event, CAT));
}

initEventsListeners();
setInterval(play, 5);

initAnimation(BACKGROUND, imageBackground);
initAnimation(BUTTONPLAY, imagePlay);
initAnimation(BACKGROUND1, imageBackground1);
// initAnimation(CAT, cats[n]);
initAnimation(TABLE, imageTable);
initAnimation(PHONE, imagePhone);
initAnimation(DOOR, imageDoor);
initAnimation(BACKGROUND2, imageBackground2);
initAnimation(BOX, imageBox);
initAnimation(BOX1, imageBox);
initAnimation(BOX2, imageBox);
initAnimation(BOX3, imageBox);
initAnimation(BACKBUTTON, imageBack);
initAnimation(CURSOR, imageCursor);
initAnimation(FON, imageFon);
