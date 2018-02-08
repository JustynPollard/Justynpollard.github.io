// Interaciton program
// Justyn Pollard
// Feb 7, 2018

// global variables //

// Functions //
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      fill(255, 150, 150);
      rect(mouseX, mouseY, 150, 150);
    }
    if (mouseButton === RIGHT) {

    }
  }
  if (keyIsPressed) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(mouseX, mouseY, random(50, 300), random(50, 300));
  }
}

function deviceShaken() {
  fill('black')
  textSize(32);
  text('Sup', width / 2, height / 2);
}
