/////////////////////////////////////////
// Tetris
// Justyn Pollard
// Feb 2, 2018
////////////////////////////////////////


// global variables //
////////////////////////////////////////
let tetrisLogo;
let playText;
let backText;
let gameScreenOn = false;
let startingMenuOn = true;
let pause = false;
let score = 0;

// Functions //
///////////////////////////////////////
function preload() {
  tetrisLogo = loadImage("images/tetrislogo.png");
  playText = loadImage("images/playtext.png");
  backText = loadImage("images/backtext.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function playButton() {
  fill(200, 0, 0);
  rect((width / 4 - 10), (height / 4 - 10), (width / 2 + 20), (height / 2 + 20));
  fill(220, 0, 0);
  rect((width / 4), (height / 4), (width / 2), (height / 2));
  fill('black');
  textSize(100);
  image(playText, (width / 2 - 112), (height / 2 - 62));
  image(tetrisLogo, (width / 2 - 166), 100);
}

function startingMenu() {
  playButton()
}

function backButton() {
  fill(100);
  rect(50, 190, 210, 110);
  fill(200);
  rect(55, 195, 200, 100);
}

function gameScreen() {
  fill(100);
  rect((width / 2 - 260), 190, 520, 620);
  rect((width / 2 - 410), 190, 145, 145);
  fill(200);
  rect((width / 2 - 250), 200, 500, 600);
  rect((width / 2 - 400), 200, 125, 125);
  image(tetrisLogo, (width / 2 - 166), 75);
  backButton()
}

// function blockFalling() {
//
// }

function pauseScreen() {
  fill('green')
  text('PAUSED', width/2, height/2)
}

function mouseClicked() {
  if (startingMenuOn === true) {
    if (mouseX >= (width / 4 - 10) && mouseX <= (width / 4 * 3)) {
      if (mouseY >= height / 4 - 10 && mouseY <= (height / 4 * 3)) {
        startingMenuOn = false
        gameScreenOn = true
      }
    }
  }
}

function keyTyped() {
  if (startingMenuOn === false) {
    if (key === 'p') {
      pause = !pause
      gameScreenOn = !gameScreenOn
    }
  }
}



// Loop //
//////////////////////////////////////
function draw() {
  background('black')
  if (startingMenuOn === true) {
    startingMenu()
  }
  if (gameScreenOn === true) {
    gameScreen()
  }
  if (pause === true) {
    pauseScreen()
  }
}
