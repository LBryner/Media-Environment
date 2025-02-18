let img;

// Load the image.
function preload() {
  img = loadImage('/rhino.jpg');
  font = loadFont('/Wigglye.ttf');
}

function setup() {
  createCanvas(518.4, 345.6);

  background(0);

  // Draw the image.
  image(img, 0, 0, 518.4, 345.6);

  // Label the image.
  fill(255);
  textSize(36);
  textFont(font);
  text('This is a Rhinoceros!', 50, 50);
  describe('An image of a rhinoceros.');
}
