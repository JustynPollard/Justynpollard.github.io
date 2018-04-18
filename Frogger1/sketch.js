// Frogger (2d-Array)
// Justyn Pollard
// April 15th 2018

// global variables
// 1 = land, 0 = water, 3 = car, 4 = log, 5 = frog, 6 = turtle, 7 = lilly, 8 = frogLilly
let startGrid = [
  [7, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 7],
  [4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0],
  [0, 6, 6, 0, 0, 6, 6, 0, 0, 0, 6, 6, 0, 0],
  [0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0],
  [0, 4, 4, 4, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0],
  [6, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 6, 6],
  [1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1],
  [1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1],
  [1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1],
  [1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1],
  [1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let grid = [
  [7, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 7],
  [4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0],
  [0, 6, 6, 0, 0, 6, 6, 0, 0, 0, 6, 6, 0, 0],
  [0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0],
  [0, 4, 4, 4, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0],
  [6, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 6, 6],
  [1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1],
  [1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1],
  [1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1],
  [1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1],
  [1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let winWidth = 1200;
let winHeight = 1200;
let froggerTitle, playButton, playButtonHighlighted;
let carIcon1, carIcon2, carIcon3, trainIcon;
let frogChar;
let turtleChar;
let sidewalk;
let gameOverFont;
let startScreenOn = true;
let gameScreenOn = false;
let cellSize;
let lives = 3;
let frogXCord, frogYCord;
let rotation = 0;
let previousCell = 1;
let previousCell1;
let timer = 60 * 60;
let score = 0;

// Setup Functions //
function preload() {
  froggerTitle = loadImage("images/froggerTitle.png");
  frogChar = loadImage("images/frogChar.png");
  playButton = loadImage("images/playButton.png");
  playButtonHighlighted = loadImage("images/playButtonHighlighted.png");
  trainIcon = loadImage("images/trainIcon.png");
  carIcon1 = loadImage("images/carIcon1.png");
  carIcon2 = loadImage("images/carIcon2.png");
  carIcon3 = loadImage("images/carIcon3.png");
  turtleChar = loadImage("images/turtleChar.png");
  sidewalk = loadImage("images/sidewalk.png");
  gameOverFont = loadFont("assests/game_over.ttf");
}

function setup() {
  createCanvas(1500, winHeight);
  cellSize = winWidth / 14;
}


// Functions //
function displayStartScreen() { // Displays start screen //
  background(0);
  for (let i = 0; i < winHeight; i++) { //Displays gradient background
    stroke(0, i / winHeight * 100, 0);
    line(0, i, 1500, i);
  }
  strokeWeight(50);
  stroke("black");
  line(0, 0, 0, 1200);
  line(0, 0, 1500, 0);
  line(1500, 0, 1500, 1200);
  line(0, 1200, 1500, 1200);
  image(froggerTitle, 750 - 275, 50);
  playButtonFun();
}

function playButtonFun() {
  if (mouseX >= 1500 / 2 - 115 && mouseX <= 1500 / 2 + 115 && mouseY >= 500 && mouseY <= 600) { // Button Function
    image(playButtonHighlighted, 1500 / 2 - 115, 500);
    if (mouseIsPressed) {
      startScreenOn = false;
      gameScreenOn = true;
    }
  } else {
    image(playButton, 1500 / 2 - 115, 500);
  }
}

function displayGameScreen() { //Displays game screen
  background("black");
  noStroke();
  for (let x = 0; x < 14; x++) { //Loops through grid x axis
    for (let y = 0; y < 14; y++) { //Loops through grid y axis

      if (grid[y][x] === 5) {
        frogXCord = x;
        frogYCord = y;
        if (y >= 12 || y === 6) {
          image(sidewalk, x * cellSize, y * cellSize);
        }
        if (grid[frogYCord][frogXCord + 1] === 4 || grid[frogYCord][frogXCord - 1] === 4) {
          fill("brown");
        }
        if (grid[frogYCord][frogXCord + 1] === 6 || grid[frogYCord][frogXCord - 1] === 6) {
          fill(0, 0, 200);
          image(turtleChar, x * cellSize, y * cellSize);
        }
      }

//Asks what number the grid location is, and fills in accordingly
      if (grid[y][x] === 1) {
        fill("black");
      }

      if (grid[y][x] === 0 || grid[y][x] === 6) {
        fill(0, 0, 200);
      }

      if (grid[y][x] === 3) {
        fill("black");
      }

      if (grid[y][x] === 4) {
        fill("brown");
      }

      if (grid[y][x] === 7) {
        fill("green");
      }

      if (grid[y][x] === 8) {
        fill("green")
      }

      rect(x * cellSize, y * cellSize, cellSize, cellSize);

//Asks what number grid location is gain, but fills in image
      if (grid[y][x] === 5) {
        if (y >= 12 || y === 6) {
          image(sidewalk, x * cellSize, y * cellSize);
        }
        if (y <= 5 && y >= 1) {
          if (grid[frogYCord][frogXCord + 1] === 4 || grid[frogYCord][frogXCord - 1] === 4) {
            fill("brown");
          }
          if (grid[frogYCord][frogXCord + 1] === 6 || grid[frogYCord][frogXCord - 1] === 6) {
            fill("blue");
            image(turtleChar, x * cellSize, y * cellSize);
          }
        }
        if (y <= 11 && y >= 7) {
          fill("black");
        }
        image(frogChar, x * cellSize, y * cellSize);
      }

      if (grid[y][x] === 3) {
        if (y === 11) {
          image(carIcon1, x * cellSize, y * cellSize);
        }
        if (y === 7) {
          image(trainIcon, x * cellSize, y * cellSize);
        }
        if (y === 9) {
          image(carIcon2, x * cellSize, y * cellSize);
        }
        if (y === 8) {
          image(carIcon3, x * cellSize, y * cellSize);
        }
        if (y === 10) {
          image(carIcon3, x * cellSize, y * cellSize);
        }
      }

      if (grid[y][x] === 6) {
        image(turtleChar, x * cellSize, y * cellSize);
      }

      if (grid[y][x] === 1) {
        if (y >= 12 || y === 6) {
          image(sidewalk, x * cellSize, y * cellSize);
        }
      }
      if ((y === 6 || y >= 12) && grid[y][x] !== 5) {
        grid[y][x] === 1;
      }
      if (grid[y][x] === 8) {
        image(frogChar, x*cellSize, y * cellSize);
      }
    }
  }
  //Asks if location of frog is a lillyPad location
  if (frogYCord === 0) {
    if (frogXCord === 0) {
      startGrid[0][0] = 8
      death()
      lives = lives + 1
      score = score + 150
    } else if (frogXCord === 4) {
      startGrid[0][4] = 8
      death()
      lives = lives + 1
      score = score + 150
    } else if (frogXCord === 9) {
      startGrid[0][9] = 8
      death()
      lives = lives + 1
      score = score + 150
    } else if (frogXCord === 13) {
      startGrid[0][13] = 8
      death()
      lives = lives + 1
      score = score + 150
    }
  }

  moveCars();
  moveLogs();
  // moveturtles();
  sideBar();
}


function moveCars() {

  //Moves each row of cars every designated amount of frames, and detects if hitting frog
  if (frameCount % 35 === 0) {
    for (let x = 0; x < 14; x++) {
      for (let y = 0; y < 14; y++) {
        if (grid[y][x] === 3) {
          if (y === 11) {
            if (y === frogYCord && x === frogXCord) {
              death();
            } else if (x === 0) {
              grid[y][13] = 3;
              grid[y][x] = 1;
            } else {
              grid[y][x - 1] = 3;
              grid[y][x] = 1;
            }
          }
        }
      }
    }
  }
  if (frameCount % 20 === 0) {
    for (let x = 0; x < 14; x++) {
      for (let y = 0; y < 14; y++) {
        if (grid[y][x] === 3) {
          if (y === 9) {
            if (y === frogYCord && x === frogXCord) {
              death();
            } else if (x === 0) {
              grid[y][13] = 3;
              grid[y][x] = 1;
            } else {
              grid[y][x - 1] = 3;
              grid[y][x] = 1;
            }
          }
        }
      }
    }
  }
  if (frameCount % 30 === 0) {
    for (let x = 13; x >= 0; x--) {
      for (let y = 13; y >= 0; y--) {
        if (grid[y][x] === 3) {
          if (y === 8) {
            if (y === frogYCord && x === frogXCord) {
              death();
            } else if (x === 13) {
              grid[y][0] = 3;
              grid[y][x] = 1;
            } else {
              grid[y][x + 1] = 3;
              grid[y][x] = 1;
            }
          }
        }
      }
    }
  }
  if (frameCount % 30 === 0) {
    for (let x = 13; x >= 0; x--) {
      for (let y = 13; y >= 0; y--) {
        if (grid[y][x] === 3) {
          if (y === 10) {
            if (y === frogYCord && x === frogXCord) {
              death();
            } else if (x === 13) {
              grid[y][0] = 3;
              grid[y][x] = 1;
            } else {
              grid[y][x + 1] = 3;
              grid[y][x] = 1;
            }
          }
        }
      }
    }
  }
  if (frameCount % 20 === 0) {
    for (let x = 0; x < 14; x++) {
      for (let y = 0; y < 14; y++) {
        if (grid[y][x] === 3) {
          if (y === 7) {
            if (y === frogYCord && x === frogXCord) {
              death();
            } else if (x === 0) {
              grid[y][13] = 3;
              grid[y][x] = 1;
            } else {
              grid[y][x - 1] = 3;
              grid[y][x] = 1;
            }
          }
        }
      }
    }
  }
}

function moveLogs() {

    //Moves each row of logs every designated amount of frames
  if (frameCount % 20 === 0) {
    for (let x = 0; x < 14; x++) {
      for (let y = 0; y < 14; y++) {
        if (grid[y][x] === 4) {
          if (y === 3) {
            if (grid[y][x + 1] === 5) {
              grid[y][x - 1] = 4;
              grid[y][x] = 5;
            } else if (grid[y][x - 1] === 5) {
              grid[y][x - 1] = 4;
              grid[y][x - 2] = 5;
            } else if (x === 0) {
              grid[y][13] = 4;
              grid[y][x] = 0;
            } else {
              grid[y][x - 1] = 4;
              grid[y][x] = 0;
            }
          }
        }
      }
    }
  }


  if (frameCount % 30 === 0) {
    for (let x = 0; x < 14; x++) {
      for (let y = 0; y < 14; y++) {
        if (grid[y][x] === 4) {
          if (y === 4) {
            if (grid[y][x + 1] === 5) {
              grid[y][x - 1] = 4;
              grid[y][x] = 5;
            } else if (grid[y][x - 1] === 5) {
              grid[y][x - 1] = 4;
              grid[y][x - 2] = 5;
            } else if (x === 0) {
              grid[y][13] = 4;
              grid[y][x] = 0;
            } else {
              grid[y][x - 1] = 4;
              grid[y][x] = 0;
            }
          }
        }
      }
    }
  }
  if (frameCount % 40 === 0) {
    for (let x = 0; x < 14; x++) {
      for (let y = 0; y < 14; y++) {
        if (grid[y][x] === 4) {
          if (y === 1) {
            if (grid[y][x + 1] === 5) {
              grid[y][x - 1] = 4;
              grid[y][x] = 5;
            } else if (grid[y][x - 1] === 5) {
              grid[y][x - 1] = 4;
              grid[y][x - 2] = 5;
            } else if (x === 0) {
              grid[y][13] = 4;
              grid[y][x] = 0;
            } else {
              grid[y][x - 1] = 4;
              grid[y][x] = 0;
            }
          }
        }
      }
    }
  }
}

// Work in progress //
// function moveTurtles() {
//
// }

function sideBar() { //Displays side/info bar
  fill("green");
  rect(1200, 0, 1500, 1200);
  fill("black");
  rect(1225, 25, 250, 1150);
  image(froggerTitle, 1350 - 110, 100, 220, 70);
  textFont(gameOverFont);
  textSize(200);
  fill("green");
  text("LIVES:", 1225, 250);
  text("TIME:", 1240, 550);
  fill(0, 250, 0);
  text("LIVES:", 1230, 250);
  text("TIME:", 1245, 550);
  textSize(190);
  fill("green");
  text("SCORE:", 1225, 400);
  fill(0, 250, 0);
  text("SCORE:", 1230, 400);
  for (let i = 0; i < 55 * lives; i = i + 55) {
    image(frogChar, i + 1275, 275, 50, 50);
  }
  deathTimer(60);
  displayScore();
}

function deathTimer(seconds) { //Count down bar timer
  if (timer === 0) {
    death();
    timer = seconds * 60;
  }
  timer = timer - 1;
  fill(0, 250, 0);
  rect(1230, 575, timer / 15, 50);
  if (timer / 15 - 20 > 0) {
    fill("green");
    rect(1240, 585, timer / 15 - 20, 30);
  }
}

function displayScore() { //Displays score
  fill("white");
  text(score, 1325, 470);
}


function keyPressed() {

//Moves frog according to selceted key and detects if movement will kill frog
  if (keyCode === UP_ARROW) {
    previousCell1 = grid[frogYCord - 1][frogXCord];
    if (grid[frogYCord - 1][frogXCord] === 0 || grid[frogYCord - 1][frogXCord] === 3) {
      death();
    } else {
      grid[frogYCord - 1][frogXCord] = 5;
      grid[frogYCord][frogXCord] = previousCell;
      previousCell = previousCell1;
    }
  }

  if (keyCode === DOWN_ARROW) {
    previousCell1 = grid[frogYCord + 1][frogXCord];
    if (grid[frogYCord + 1][frogXCord] === 0 || grid[frogYCord + 1][frogXCord] === 3) {
      death();
    } else {
      grid[frogYCord + 1][frogXCord] = 5;
      grid[frogYCord][frogXCord] = previousCell;
      previousCell = previousCell1;
    }
  }

  if (keyCode === RIGHT_ARROW) {
    previousCell1 = grid[frogYCord][frogXCord + 1];
    if (grid[frogYCord][frogXCord + 1] === 0 || grid[frogYCord][frogXCord + 1] === 3) {
      death();
    } else {
      grid[frogYCord][frogXCord + 1] = 5;
      grid[frogYCord][frogXCord] = previousCell;
      previousCell = previousCell1;
    }
  }

  if (keyCode === LEFT_ARROW) {
    previousCell1 = grid[frogYCord][frogXCord - 1];
    if (grid[frogYCord][frogXCord - 1] === 0 || grid[frogYCord][frogXCord - 1] === 3) {
      death();
    } else {
      grid[frogYCord][frogXCord - 1] = 5;
      grid[frogYCord][frogXCord] = previousCell;
      previousCell = previousCell1;
    }
  }
}

function death() { //Kills frog and resets grid
  lives = lives - 1;
  previousCell = 1
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      grid[y][x] = startGrid[y][x];
    }
  }
}

function displayGameOverScreen() { //Displays gameover screen
  background("black");
  textSize(150);
  text("GAME OVER", 200, 550);
}

// Main Loop //
function draw() {
  //Asks what screen to display
  if (startScreenOn === true) {
    displayStartScreen();
  }
  if (gameScreenOn === true) {
    if (lives > 0) {
      displayGameScreen();
    } else {
      displayGameOverScreen();
    }
  }
}
