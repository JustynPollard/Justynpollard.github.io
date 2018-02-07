//Test//
///////////////////////////////////////////////////////////
// Global Variables //
let x;
let y;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  isMovingUp = false;
  isMovingDown = false;
  isMovingLeft = false;
  isMovingRight = false;
}

function draw(){
  background('white')
  moveStickman();
  drawStickman(x, y)
  drawStickman(200, 400)
}


function moveStickman(){
  if(key ==='w'|| key ==='W'){
    y = y - 50
  }
  if(key ==='s'|| key ==='S'){
    y = y + 50
  }
  if(key ==='a'|| key ==='A'){
    x = x - 50
  }
  if(key ==='d'|| key ==='D'){
    x = x + 50
  }
}

function drawStickman(x, y) {
  // Head //
  fill(0, 255, 0);
  ellipse(x + 200, y + 200, 100, 100);

  // Hat //
  fill(255, 0, 100);
  rect(x + 150, y + 120, 100, 30);
  rect(x + 175, y + 50, 50, 100);

  // Body //
  line(x + 200, y + 250, x + 200, y + 500);

  // Arms //
  line(x + 200, y + 300, x + 150, y + 225);
  line(x + 200, y + 300, x + 300, y + 150);
  line(x + 150, y + 225, x + 250, y + 150);

  // Legs //
  line(x + 200, y + 500, x + 100, y + 600);
  line(x + 200, y + 500, x + 300, y + 600);

}
