//set the width and height of the canvas
var canW = 500; //canvas width
var canH = 300; //canvas height

//Denmark vars
var lineXP = canW * (14/37); //vertical line y pos
var lineYP = canH * (14/28); //horizontal line x pos
var hLineW = canW * (4/37); //horizontal line weight
var vLineW = canH * (4/28); //vertical line weight

//Congo vars
var gTop = canW * (2/3); //green triangle top pos
var rBot = canW / 3; //red triangle bottom pos

let myInput;

function setup() {
  createCanvas(canW, canH);
  myInput = createInput("Type here...");
  myInput.position(0, (height-22));
}

function draw() {
  let msg = myInput.value();
  
  if (msg === "Congo" || msg === "congo")
    {
      console.log("Congo");
      background(251, 222, 74); //yellow stripe
      noStroke();
      fill(0, 149, 67); //green
      triangle(0, 0, gTop, 0, 0, canH); //green triangle
      fill(220, 36, 31); //red
      triangle(canW, 0, canW, canH, rBot, canH); //red triangle
    }
  else if (msg === "Denmark" || msg === "denmark")
    {
      console.log("Denmark");
      background(200, 16, 46);
      stroke(255, 255, 255);
      strokeWeight(hLineW);
      line(0, lineYP, canW, lineYP); //horizontal line
      strokeWeight(vLineW);
      line(lineXP, 0, lineXP, canH); //vertical line
    }
  else
    {
      fill(0);
      noStroke();
      background(220);
    }
}