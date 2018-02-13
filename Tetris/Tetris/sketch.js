/////////////////////////////////////////
// Tetris
// Justyn Pollard
// Feb 2, 2018
////////////////////////////////////////


// global variables //
////////////////////////////////////////
let gameScreenOn = false
let startingMenuOn = true

// Functions //
///////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function playButton() {
  fill(200, 0, 0)
  rect((width / 4 - 10), (height / 4 - 10), (width / 2 + 20), (height / 2 + 20))
  fill(240, 0, 0)
  rect((width / 4), (height / 4), (width / 2), (height / 2))
  fill('black')
  textSize(100)
  text('PLAY', (width / 2 - 150), (height / 2 - 30), (width / 2 + 150), (height / 2 + 30))
}

function startingMenu() {
  playButton()
}

function gameScreen() {
  fill('white')
  rect((width / 2 - 250), 100, 500, 600);
  rect((width / 2 - 400), 100, 125, 125);
}

function mouseClicked() {
  if (startingMenuOn === true) {
    if (mouseX >= (width / 4 - 10) && mouseX <= (width / 4 * 3)) {
      startingMenuOn = false
      gameScreenOn = true
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
}
