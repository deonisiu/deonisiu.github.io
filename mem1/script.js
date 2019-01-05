/**
 * Created by Deonisiu on 04.01.2019.
 */
"use strict";

const DELTA = 25;
const MULTIPLIER = 0.9;

var canvas;
var context;
var xCor;
var yCor;
var startPoint; // valid value - 1, 2, 3, 4, 5, 6

var xTemp = [0,0,0,0,0,0];
var yTemp = [0,0,0,0,0,0];
var sortX = [0,0,0,0,0,0];
var sortY = [0,0,0,0,0,0];

window.onload = function () {
    canvas = document.querySelector(".canvas");
    context = canvas.getContext('2d');

    console.log(canvas.width);

    context.lineWidth = 1;

    console.log("xCor = " + xCor + " yCor = " + yCor);


    var inputNumb = document.querySelector(".inputNumb");
    var drawButton = document.querySelector(".draw-button");
    var hideButton = document.querySelector(".hide-button");
    var hide = document.querySelector(".hide");

    drawButton.addEventListener('click', function (event) {
        var canv = document.querySelector("canvas");
        var cont = canv.getContext('2d');
        var startCorX = canvas.width / 2;
        var startCorY = canvas.height / 2;

        console.log("canv.width = " + canv.width);

        xCor = startCorX - DELTA/2;
        yCor = startCorY - DELTA;
        xTemp[0] = xCor;
        yTemp[0] = yCor;

        cont.beginPath();
        cont.clearRect(0, 0, canv.width, canv.height);

        Draw1(xCor, yCor);
        createPict(inputNumb.value);
    });

    hideButton.addEventListener('click', function (event) {
        hide.classList.toggle("show");
    });

    var canvSizeButton = document.querySelector(".canvSizeBut");

    canvSizeButton.addEventListener("click", function (event) {
        var canvW = document.querySelector(".canvW");
        var canvH = document.querySelector(".canvH");
        var canv = document.querySelector("canvas");

        canv.width = canvW.value;
        canv.height = canvH.value;
    })
};

function createPict(count) {
    var max = 6;
    var min = 1;

    for(var i=0; i<count; i++){
        var randSide = Math.floor(Math.random() * (max - min) + min);
        chooseSide(randSide);
        drawRect();
    }
}

function arrToArr(temp, sort) {
    for(var i=0; i<temp.length; i++){
        sort[i] = temp[i];
    }
}
function randomSide() {
    // return true or false
    return (Math.floor(Math.random() * 2) === 0);
}
function chooseSide(sideNumb) {
    console.log("choose - " + sideNumb);
    var rand = randomSide();

    switch (sideNumb) {
        case 1:
            xCor = sortX[1];
            yCor = sortY[0];

            // valid 3, 5
            startPoint = rand ? 3 : 5;
            break;
        case 2:
            xCor = sortX[4];
            yCor = sortY[0];

            // valid 4, 6
            startPoint = rand ? 4 : 6;
            break;
        case 3:
            xCor = sortX[5];
            yCor = sortY[3];

            // valid 1, 5
            startPoint = rand ? 1 : 5;
            break;
        case 4:
            xCor = sortX[4];
            yCor = sortY[5];

            // valid 2, 6
            startPoint = rand ? 2 : 6;
            break;
        case 5:
            xCor = sortX[1];
            yCor = sortY[5];

            // valid 1, 3
            startPoint = rand ? 1 : 3;
            break;
        case 6:
            xCor = sortX[0];
            yCor = sortY[3];

            // valid 2, 4
            startPoint = rand ? 2 : 4;
            break;
        default:
            console.log("ERROR");
            break;
    }

    console.log("startPoint = " + startPoint);
    console.log("start xCor = " + xCor);
    console.log("start yCor = " + yCor);
}
function drawRect() {
    switch (startPoint) {
        case 1:
            Draw1(xCor, yCor);
            break;
        case 2:
            Draw2(xCor, yCor);
            break;
        case 3:
            Draw3(xCor, yCor);
            break;
        case 4:
            Draw4(xCor, yCor);
            break;
        case 5:
            Draw5(xCor, yCor);
            break;
        case 6:
            Draw6(xCor, yCor);
            break;
        default:
            console.log("ERROR");
            break;
    }


}

function randInnerLine1() {
    var randInnerSide = Math.floor(Math.random() * (6 - 1) + 1);

    console.log("RAND INNER SIDE = " + randInnerSide);

    switch (randInnerSide) {
        case 1:
            context.moveTo(xTemp[0]+5, yTemp[0]+10);
            context.lineTo(xTemp[1]-5, yTemp[1]+10);
            context.moveTo(xCor, yCor);
            break;
        case 2:
            context.moveTo(xTemp[1]-5, yTemp[1]+10);
            context.lineTo(xTemp[2]-10, yTemp[2]);
            context.moveTo(xCor, yCor);
            break;
        case 3:
            context.moveTo(xTemp[2]-10, yTemp[2]);
            context.lineTo(xTemp[3]-5, yTemp[3]-10);
            context.moveTo(xCor, yCor);
            break;
        case 4:
            context.moveTo(xTemp[3]-5, yTemp[3]-10);
            context.lineTo(xTemp[4]+5, yTemp[4]-10);
            context.moveTo(xCor, yCor);
            break;
        case 5:
            context.moveTo(xTemp[5]+5, yTemp[5]+10);
            context.lineTo(xTemp[6]+10, yTemp[6]);
            context.moveTo(xCor, yCor);
            break;
        case 6:
            context.moveTo(xTemp[6]+10, yTemp[6]);
            context.lineTo(xTemp[1]+5, yTemp[1]-10);
            context.moveTo(xCor, yCor);
            break;
    }
}
function randInnerLine2() {
    var randInnerSide = Math.floor(Math.random() * (6 - 1) + 1);

    console.log("RAND INNER SIDE = " + randInnerSide);

    switch (randInnerSide) {
        case 1:
            context.moveTo(xTemp[6]+10, yTemp[6]);
            context.lineTo(xTemp[1]+5, yTemp[1]-10);
            context.moveTo(xCor, yCor);


            break;
        case 2:
            context.moveTo(xTemp[0]+5, yTemp[0]+10);
            context.lineTo(xTemp[1]-5, yTemp[1]+10);
            context.moveTo(xCor, yCor);


            break;
        case 3:
            context.moveTo(xTemp[1]-5, yTemp[1]+10);
            context.lineTo(xTemp[2]-10, yTemp[2]);
            context.moveTo(xCor, yCor);


            break;
        case 4:
            context.moveTo(xTemp[2]-10, yTemp[2]);
            context.lineTo(xTemp[3]-5, yTemp[3]-10);
            context.moveTo(xCor, yCor);


            break;
        case 5:
            context.moveTo(xTemp[3]-5, yTemp[3]-10);
            context.lineTo(xTemp[4]+5, yTemp[4]-10);
            context.moveTo(xCor, yCor);


            break;
        case 6:
            context.moveTo(xTemp[5]+5, yTemp[5]+10);
            context.lineTo(xTemp[6]+10, yTemp[6]);
            context.moveTo(xCor, yCor);


            break;
    }
}

function Draw1(x, y) {
    context.moveTo(x, y);

    xTemp[0] = x;
    yTemp[0] = y;

    DrawLine1();
    xTemp[1] = xCor;
    yTemp[1] = yCor;

    DrawLine2();
    xTemp[2] = xCor;
    yTemp[2] = yCor;

    DrawLine3();
    xTemp[3] = xCor;
    yTemp[3] = yCor;

    DrawLine4();
    xTemp[4] = xCor;
    yTemp[4] = yCor;

    DrawLine5();
    xTemp[5] = xCor;
    yTemp[5] = yCor;

    DrawLine6();

    randInnerLine1();

    context.stroke();

    arrToArr(xTemp, sortX);
    arrToArr(yTemp, sortY);
    // sortX = xTemp;
    // sortY = yTemp;

    console.log("----------BEFORE--------------")
    for(var index1 in xTemp) {
        console.log("xTemp = " + xTemp[index1]);
    }
    console.log("---");
    for(var index2 in yTemp) {
        console.log("yTemp = " + yTemp[index2]);
    }

    console.log("-***-")

    for(var index3 in sortX) {
        console.log("xSort = " + sortX[index3]);
    }
    console.log("---");
    for(var index4 in sortY) {
        console.log("ySort = " + sortY[index4]);
    }
    console.log("------------------------")

    console.log(" ---- ");
    console.log("curr xCor = " + xCor);
    console.log("curr yCor = " + yCor);

    sortX.sort();
    sortY.sort();

    console.log("----------AFTER--------------")
    for(var index1 in xTemp) {
        console.log("xTemp = " + xTemp[index1]);
    }
    console.log("---");
    for(var index2 in yTemp) {
        console.log("yTemp = " + yTemp[index2]);
    }

    console.log("-***-")

    for(var index3 in sortX) {
        console.log("xSort = " + sortX[index3]);
    }
    console.log("---");
    for(var index4 in sortY) {
        console.log("ySort = " + sortY[index4]);
    }
    console.log("------------------------")

    console.log(" ---- ");
    console.log("curr xCor = " + xCor);
    console.log("curr yCor = " + yCor);
}
function Draw2(x, y) {
    context.moveTo(x, y);

    xTemp[0] = x;
    yTemp[0] = y;

    DrawLine2();
    xTemp[1] = xCor;
    yTemp[1] = yCor;

    DrawLine3();
    xTemp[2] = xCor;
    yTemp[2] = yCor;

    DrawLine4();
    xTemp[3] = xCor;
    yTemp[3] = yCor;

    DrawLine5();
    xTemp[4] = xCor;
    yTemp[4] = yCor;

    DrawLine6();
    xTemp[5] = xCor;
    yTemp[5] = yCor;

    DrawLine1();
    // randInnerLine2();
    context.stroke();

    sortX = xTemp;
    sortY = yTemp;
    sortX.sort();
    sortY.sort();
}
function Draw3(x, y) {
    context.moveTo(x, y);

    xTemp[0] = x;
    yTemp[0] = y;

    DrawLine3();
    xTemp[1] = xCor;
    yTemp[1] = yCor;

    DrawLine4();
    xTemp[2] = xCor;
    yTemp[2] = yCor;

    DrawLine5();
    xTemp[3] = xCor;
    yTemp[3] = yCor;

    DrawLine6();
    xTemp[4] = xCor;
    yTemp[4] = yCor;

    DrawLine1();
    xTemp[5] = xCor;
    yTemp[5] = yCor;

    DrawLine2();

    context.stroke();

    sortX = xTemp;
    sortY = yTemp;
    sortX.sort();
    sortY.sort();
}
function Draw4(x, y) {
    context.moveTo(x, y);

    xTemp[0] = x;
    yTemp[0] = y;

    DrawLine4();
    xTemp[1] = xCor;
    yTemp[1] = yCor;

    DrawLine5();
    xTemp[2] = xCor;
    yTemp[2] = yCor;

    DrawLine6();
    xTemp[3] = xCor;
    yTemp[3] = yCor;

    DrawLine1();
    xTemp[4] = xCor;
    yTemp[4] = yCor;

    DrawLine2();
    xTemp[5] = xCor;
    yTemp[5] = yCor;

    DrawLine3();

    context.stroke();

    sortX = xTemp;
    sortY = yTemp;
    sortX.sort();
    sortY.sort();
}
function Draw5(x, y) {
    context.moveTo(x, y);

    xTemp[0] = x;
    yTemp[0] = y;

    DrawLine5();
    xTemp[1] = xCor;
    yTemp[1] = yCor;

    DrawLine6();
    xTemp[2] = xCor;
    yTemp[2] = yCor;

    DrawLine1();
    xTemp[3] = xCor;
    yTemp[3] = yCor;

    DrawLine2();
    xTemp[4] = xCor;
    yTemp[4] = yCor;

    DrawLine3();
    xTemp[5] = xCor;
    yTemp[5] = yCor;

    DrawLine4();

    context.stroke();

    sortX = xTemp;
    sortY = yTemp;
    sortX.sort();
    sortY.sort();
}
function Draw6(x, y) {
    context.moveTo(x, y);

    xTemp[0] = x;
    yTemp[0] = y;

    DrawLine6();
    xTemp[1] = xCor;
    yTemp[1] = yCor;

    DrawLine1();
    xTemp[2] = xCor;
    yTemp[2] = yCor;

    DrawLine2();
    xTemp[3] = xCor;
    yTemp[3] = yCor;

    DrawLine3();
    xTemp[4] = xCor;
    yTemp[4] = yCor;

    DrawLine4();
    xTemp[5] = xCor;
    yTemp[5] = yCor;

    DrawLine5();

    context.stroke();

    sortX = xTemp;
    sortY = yTemp;
    sortX.sort();
    sortY.sort();
}


function DrawLine1() {
    xCor += DELTA;
    context.lineTo(xCor, yCor);
}
function DrawLine2() {
    xCor += DELTA/2;
    yCor += DELTA * MULTIPLIER;
    context.lineTo(xCor, yCor);
}
function DrawLine3() {
    xCor-=DELTA/2;
    yCor+=DELTA * MULTIPLIER;
    context.lineTo(xCor, yCor);
}
function DrawLine4() {
    xCor-=DELTA;
    context.lineTo(xCor, yCor);
}
function DrawLine5() {
    xCor-=DELTA/2;
    yCor-=DELTA * MULTIPLIER;
    context.lineTo(xCor, yCor);
}
function DrawLine6() {
    xCor+=DELTA/2;
    yCor-=DELTA * MULTIPLIER;
    context.lineTo(xCor, yCor);
}