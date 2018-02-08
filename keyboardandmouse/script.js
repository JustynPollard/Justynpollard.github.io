// Interaciton program
// Justyn Pollard
// Feb 7, 2018

// global variables //

// Functions //
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function deviceShaken() {
  fill('black')
  textSize(32);
  text('Sup', width / 2, height / 2);
}

function keyPressed() {
  if (keyCode == W) {
    background('white');
  }
  if (keyCode == B) {
    background('black');
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    fill(255, 150, 150);
    rect(mouseX, mouseY, 150, 150);
  }
  if (mouseButton === RIGHT) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 150, 150);
  }
}
function touchMoved() {
  ellipse(mouseX, mouseY, 5, 5);
}
