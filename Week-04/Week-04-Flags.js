// Flag of Denmark

var canW = 370; //canvas width
var canH = 280 //canvas height
var lineXP = canW * (14/37); //vertical line y pos
var lineYP = canH * (14/28); //horizontal line x pos
var hLineW = canW * (4/37); //horizontal line weight
var vLineW = canH * (4/28); //vertical line weight

function setup() {
  createCanvas(canW, canH);
  background(200, 16, 46);
}

function draw() {
  stroke(255, 255, 255);
  strokeWeight(hLineW);
  line(0, lineYP, canW, lineYP); //horizontal line
  strokeWeight(vLineW);
  line(lineXP, 0, lineXP, canH); //vertical line
}



//Flag of Congo

var canW = 600; //canvas width
var canH = 400; //canvas height
var gTop = canW * (2/3); //green triangle top pos
var rBot = canW / 3; //red triangle bottom pos

function setup() {
  createCanvas(canW, canH);
  background(251, 222, 74); //yellow stripe
}

function draw() {
  noStroke();
  fill(0, 149, 67); //green
  triangle(0, 0, gTop, 0, 0, canH); //green triangle
  fill(220, 36, 31); //red
  triangle(canW, 0, canW, canH, rBot, canH); //red triangle
}
