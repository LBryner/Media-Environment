function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0, 70, 100);
  fill(255);
  textStyle(BOLDITALIC);
  textFont('courier new', 32);
  text('Harrisburg University', 50, 50);
  textStyle(NORMAL);
  textFont('courier new', 14);
  text('HU is the closest college to my current home. This allows me to commute to HU within 20 minutes and I do not have to pay for room and board. HU also has a highschool-based scholarship that takes a huge chunk out of my tuition.', 100, 100, 600);
}