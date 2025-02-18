var bgColor = 255;
var sizeX = 30;
var sizeY = 30;

function setup() {
  createCanvas(500, 400);
  
  //setup background
  background(bgColor);
  
  
  //setup button red
  let redButton;
  redButton = createButton('Red');
  redButton.size(100, 50);
  redButton.position(10, 10);
  redButton.style('background:red;');
  redButton.mousePressed(changeRed);
  
  //setup button blue
  let blueButton;
  redButton = createButton('Blue');
  redButton.size(100, 50);
  redButton.position(10, 70);
  redButton.style('background:blue;');
  redButton.mousePressed(changeBlue);
  
  //setup eraser
  let clearButton;
  clearButton = createButton('Erase');
  clearButton.size(100, 50);
  clearButton.position(10, 130);
  clearButton.style('backgorund:white;');
  clearButton.mousePressed(changeClear);
  
  //setup reset
  let resetButton;
  resetButton = createButton('Reset');
  resetButton.size(100, 50);
  resetButton.position(10, 190);
  resetButton.style('backgorund:white;');
  resetButton.mousePressed(changeReset);
  
  //setup big pen
  let bigButton;
  bigButton = createButton('Big');
  bigButton.size(100, 50);
  bigButton.position(10, 250);
  bigButton.mousePressed(sizeBig);
  
  //setup small pen
  let smallButton;
  smallButton = createButton('Small');
  smallButton.size(100, 50);
  smallButton.position(10, 310);
  smallButton.mousePressed(sizeSmall);
}

function changeRed() {
  fill('Red');
}

function changeBlue() {
  fill('Blue');
}

function changeClear() {
  fill(bgColor);
}

function changeReset() {
  fill(bgColor);
  background(bgColor);
}

function sizeBig() {
  sizeX = 60;
  sizeY = 60;
}

function sizeSmall() {
  sizeX = 30;
  sizeY = 30;
}


function draw() {
  noStroke();
  if (mouseIsPressed){
    ellipse(mouseX, mouseY, sizeX, sizeY);
  }
  else{}
}