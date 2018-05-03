// Pair Programming Tetris(2d-Array based) //
// Justyn Pollard //
// April 18, 2018 //

// global variables //

// 0 = Empty location, 3 = stopped moving block, 2 = Stationary block, 1 = Moving block
let grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let shapeGrid;

let shapes = ['S', 'Z', 'I', 'L', 'T', 'J', 'square'];
let purpleCube, blueCube, redCube, orangeCube, greenCube, yellowCube;
let colors = ["purpleCube", "blueCube", "redCube", "orangeCube", "greenCube"];
let cellSize = 50;
let winHeight = 1200;
let winWidth = 1600;
let startScreenOn = true;
let gameScreenOn = false;
let deathScreenOn = false;
let playButton, playButtonHighlighted;
let block;
let border;
let pickedShape;
let spaceFree = true;
let threePresent;
let score = 0;
let currentShape;
let secondShape;
let thirdShape;
let randomColor;

// Setup Functions //
function preload() {
  background1 = loadImage("images/background.png")
  playButton = loadImage("images/playButton.png");
  playButtonHighlighted = loadImage("images/playButtonHighlighted.png");
  purpleCube = loadImage("images/purpleCube.png");
  blueCube = loadImage("images/blueCube.png");
  redCube = loadImage("images/redCube.png");
  orangeCube = loadImage("images/orangeCube.png");
  greenCube = loadImage("images/greenCube.png");
  yellowCube = loadImage("images/yellowCube.png");
  border1 = loadImage("images/border1.png");
  tetrisFont = loadFont("assets/ModernTetris.ttf");
}

//random selection function for arrays
Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
}

function setup() {
  createCanvas(1600, 1200);

  //picks upcoming shape and color to start//
  secondShape = shapes.sample();
  thirdShape = shapes.sample();
  secondRandomColor = colors.sample();
  thirdRandomColor = colors.sample();
}

// Functions //

// Display Screen Functions //
////////////////////////////////////////////////////////////////////////////////

function displayStartScreen() { // Bill //
  for (let i = 0; i < winHeight; i++) { // Displays gradient background
    stroke(i / winHeight * 255, 71, 190);
    line(0, i, 1600, i);
  }
  playButtonFun();
}

function playButtonFun() {
  if (mouseX >= 1600 / 2 - 130 && mouseX <= 1600 / 2 + 130 && mouseY >= 500 && mouseY <= 600) { // Button Function for starting game
    image(playButtonHighlighted, 1600 / 2 - 130, 500);
    if (mouseIsPressed) {
      startScreenOn = false;
      gameScreenOn = true;
    }
  } else {
    image(playButton, 1600 / 2 - 130, 500);
  }
}

// Game Screen Functions //
////////////////////////////////////////////////////////////////////////////////

function displayGameScreen() {
  image(background1, 0, 0)
  infoBar()
  stroke(255, 255, 255, 50);
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 18; y++) {


      if (grid[y][x] === 0) {
        fill(100, 100, 255, 100);
        stroke(255, 255, 255, 50);
      }

      //selects what cube color/image to draw for moving blocks//
      if (grid[y][x] === 1) {
        fill(255, 255, 255, 0)
        noStroke()
        if (randomColor === 'purpleCube') {
          image(purpleCube, 550 + x * cellSize, 200 + y * cellSize)
        } else if (randomColor === 'blueCube') {
          image(blueCube, 550 + x * cellSize, 200 + y * cellSize)
        } else if (randomColor === 'greenCube') {
          image(greenCube, 550 + x * cellSize, 200 + y * cellSize)
        } else if (randomColor === 'redCube') {
          image(redCube, 550 + x * cellSize, 200 + y * cellSize)
        } else if (randomColor === 'orangeCube') {
          image(orangeCube, 550 + x * cellSize, 200 + y * cellSize)
        }
      }

      //displays yellow cubes for blocks not moving//
      if (grid[y][x] === 2) {
        fill(255, 255, 255, 0)
        noStroke()
        image(yellowCube, 550 + x * cellSize, 200 + y * cellSize)
      }

      //draws background grid//
      rect(550 + x * cellSize, 200 + y * cellSize, cellSize, cellSize);
    }
  }

  pickShape();
  moveBlocks();
  scoreChecker();
}


function pickShape() { // Justyn //
  if (spaceFree === true) { // asks if there is allready an moving shape in the grid //
    spaceFree = false;

    // shuffles color and shape to the next one //
    randomColor = secondRandomColor;
    secondRandomColor = thirdRandomColor;
    thirdRandomColor = colors.sample();
    currentShape = secondShape;
    secondShape = thirdShape;
    thirdShape = shapes.sample();

    spawnShape(currentShape) // picks what shape grid to spawn accorindg to selected shape//

    // spawns in shape at top of grid and checks to see if the space is clear of non moving blocks//
    for (let x = 0; x < shapeGrid.length; x++) {
      for (let y = 0; y < shapeGrid.length; y++) {
        if (grid[x][y + 5] === 2) {
          death()
        } else {
          grid[x][y + 5] = shapeGrid[x][y]
        }
      }
    }
  }
}

function spawnShape(shape) { // Bill //
  if (shape === 'I') {
    shapeGrid = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
  } else if (shape === 'L') {
    shapeGrid = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ];
  } else if (shape === 'Z') {
    shapeGrid = [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ];
  } else if (shape === 'square') {
    shapeGrid = [
      [1, 1],
      [1, 1],
    ];
  } else if (shape === 'S') {
    shapeGrid = [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ];
  } else if (shape === 'J') {
    shapeGrid = [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ];
  } else if (shape === 'T') {
    shapeGrid = [
      [1, 0, 0],
      [1, 1, 0],
      [1, 0, 0],
    ];
  }
}

function moveBlocks() { // Justyn & Bill  //

  //moves blocks down every 30 frames(0.5s) and askes if there is any blocks in the way//
  if (frameCount % 30 === 0) {
    downFree = true;
    for (let y = 17; y >= 0; y--) {
      for (let x = 9; x >= 0; x--) {
        if (grid[y][x] === 1 && (grid[y + 1][x] === 2 || typeof grid[y + 1][x] === 'undefined')) {
          downFree = false;
        }
      }
    }
    for (let x = 9; x >= 0; x--) {
      for (let y = 17; y >= 0; y--) {
        if (grid[y][x] === 1) {
          if (grid[y + 1][x] === 2 || grid[y + 1][x] === 3) {
            grid[y][x] = 3;
          } else if (y + 1 === 17) {
            grid[y + 1][x] = 3;
            grid[y][x] = 0;
          } else if (downFree === true) {
            grid[y + 1][x] = 1;
            grid[y][x] = 0;
          }
        }
      }
    }
  }
  checkSpace()
}

function checkSpace() { // Bill //
  // asks if any blocks have currently stopped moving and if so turns all 3s and 1s into 2s //
  threePresent = false;
  for (let x = 9; x >= 0; x--) {
    for (let y = 17; y >= 0; y--) {
      if (grid[y][x] === 3) {
        threePresent = true;
      }
    }
  }
  if (threePresent === true) {
    for (let x = 9; x >= 0; x--) {
      for (let y = 17; y >= 0; y--) {
        if (grid[y][x] === 3 || grid[y][x] === 1) {
          grid[y][x] = 2;
        }
      }
    }
    spaceFree = true;
  }
}

function keyPressed() { // Justyn //

  if (keyCode === RIGHT_ARROW) { // moves to right and asks if area is clear to right //
    let rightFree = true;
    for (let x = 9; x >= 0; x--) {
      for (let y = 17; y >= 0; y--) {
        if (grid[y][x] === 1 && (grid[y][x + 1] === 2 || typeof grid[y][x + 1] === 'undefined')) {
          rightFree = false;
        }
      }
    }
    if (rightFree === true) {
      for (let x = 9; x >= 0; x--) {
        for (let y = 17; y >= 0; y--) {
          if (grid[y][x] === 1) {
            grid[y][x + 1] = 1;
            grid[y][x] = 0;
          }
        }
      }
    }
  }

  if (keyCode === LEFT_ARROW) { // moves to left and asks if area is clear down //
    let leftFree = true;
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 18; y++) {
        if (grid[y][x] === 1 && (grid[y][x - 1] === 2 || typeof grid[y][x - 1] === 'undefined')) {
          leftFree = false;
        }
      }
    }
    if (leftFree === true) {
      for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 18; y++) {
          if (grid[y][x] === 1) {
            grid[y][x - 1] = 1;
            grid[y][x] = 0;
          }
        }
      }
    }
  }

  if (keyCode === DOWN_ARROW) { // moves down and asks if area is clear down //
    let downFree = true;
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 18; y++) {
        if (grid[y][x] === 1 && (grid[y + 1][x] === 2 || typeof grid[y + 1][x] === 'undefined' || y + 1 === 17)) {
          downFree = false;
        }
      }
    }
    if (downFree === true) {
      for (let y = 17; y >= 0; y--) {
        for (let x = 9; x >= 0; x--) {
          if (grid[y][x] === 1) {
            grid[y + 1][x] = 1;
            grid[y][x] = 0;
          }
        }
      }
    }
  }

  if (keyCode === UP_ARROW) { // rotates blocks(work in progress) //
    let rotateFree = true;
    rotate:
      for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 18; y++) {
          if (grid[y][x] === 1) {
            if (currentShape === "I") {
              currentShape = "I90"
              grid[y][x] = 0;
              grid[y + 2][x] = 0;
              grid[y + 1][x - 1] = 1;
              grid[y + 1][x + 1] = 1;
              break rotate;
            }
            if (currentShape === "I90") {
              currentShape = "I"
              grid[y][x] = 0;
              grid[y][x + 2] = 0;
              grid[y - 1][x + 1] = 1;
              grid[y + 1][x + 1] = 1;
              break rotate;
            }
            if (currentShape === "L") {
              currentShape = "L90"
              grid[y][x] = 0;
              grid[y + 2][x] = 0;
              grid[y + 1][x - 1] = 1;
              grid[y + 1][x + 1] = 1;
              grid[y + 2][x + 1] = 0;
              grid[y][x + 1] = 1;
              break rotate;
            }
            if (currentShape === "L90") {
              currentShape = "L180"
              grid[y][x] = 0;
              grid[y - 1][x + 2] = 0;
              grid[y][x + 2] = 0;
              grid[y - 1][x + 1] = 1;
              grid[y + 1][x + 1] = 1;
              grid[y - 1][x] = 1;
              break rotate;
            }
            if (currentShape === "L180") {
              currentShape = "L270"
              grid[y][x] = 0;
              grid[y][x + 1] = 0;
              grid[y + 2][x + 1] = 0;
              grid[y + 1][x] = 1;
              grid[y + 2][x] = 1;
              grid[y + 1][x + 2] = 1;
              break rotate;
            }
            if (currentShape === "L270") {
              currentShape = "L"
              grid[y][x] = 0;
              grid[y + 1][x] = 0;
              grid[y][x + 2] = 0;
              grid[y - 1][x + 1] = 1;
              grid[y + 1][x + 1] = 1;
              grid[y + 1][x + 2] = 1;
              break rotate;
            }
            if (currentShape === "J") {
              currentShape = "J90"
              grid[y][x] = 0;
              grid[y - 2][x + 1] = 0;
              grid[y][x + 1] = 0;
              grid[y - 1][x] = 1;
              grid[y - 2][x] = 1;
              grid[y - 1][x + 2] = 1;
              break rotate;
            }
            if (currentShape === "J90") {
              currentShape = "J180"
              grid[y][x] = 0;
              grid[y][x + 2] = 1;
              grid[y][x + 1] = 1;
              grid[y + 1][x] = 0;
              grid[y + 1][x + 2] = 0;
              grid[y + 2][x + 1] = 1;
              break rotate;
            }
            if (currentShape === "J180") {
              currentShape = "J270"
              grid[y][x] = 0;
              grid[y + 2][x] = 0;
              grid[y][x + 1] = 0;
              grid[y + 1][x + 1] = 1;
              grid[y + 2][x + 1] = 1;
              grid[y + 1][x - 1] = 1;
              break rotate;
            }
            if (currentShape === "J270") {
              currentShape = "J"
              grid[y][x] = 0;
              grid[y][x + 2] = 0;
              grid[y + 1][x + 2] = 0;
              grid[y + 1][x] = 1;
              grid[y + 1][x + 1] = 1;
              grid[y - 1][x + 1] = 1;
              break rotate;
            }
            if (currentShape === "Z") {
              currentShape = "Z90"
              grid[y][x] = 0;
              grid[y + 1][x + 2] = 0;
              grid[y + 1][x] = 1;
              grid[y + 2][x] = 1;
              break rotate;
            }
            if (currentShape === "Z90") {
              currentShape = "Z180"
              grid[y + 1][x] = 0;
              grid[y - 1][x + 1] = 0;
              grid[y + 1][x + 1] = 1;
              grid[y + 1][x + 2] = 1;
              break rotate;
            }
            if (currentShape === "Z180") {
              currentShape = "Z270"
              grid[y][x] = 0;
              grid[y + 1][x + 2] = 0;
              grid[y][x + 2] = 1;
              grid[y - 1][x + 2] = 1;
              break rotate;
            }
            if (currentShape === "Z270") {
              currentShape = "Z"
              grid[y - 1][x + 1] = 0;
              grid[y + 1][x] = 0;
              grid[y - 1][x - 1] = 1;
              grid[y - 1][x] = 1;
              break rotate;
            }
          }
        }
      }
  }
}


function scoreChecker() { // checks if there is a full row of 2 blocks and if so clears them and gives points to player //
  for (let y = 0; y < 18; y++) {
    if (grid[y][0] === 2 && grid[y][1] === 2 && grid[y][2] === 2 && grid[y][3] === 2 && grid[y][4] === 2 && grid[y][5] === 2) {
      if (grid[y][6] === 2 && grid[y][7] === 2 && grid[y][8] === 2 && grid[y][9] === 2) {
        score = score + 100;
        for (let x = 0; x < 10; x++) {
          grid[y][x] = 0
        }
        for (let i = y - 1; i >= 0; i--) {
          for (let j = 9; j >= 0; j--) {
            print(grid[i][j])
            grid[i + 1][j] = grid[i][j]
            grid[i][j] = 0
          }
        }
      }
    }
  }
}


function infoBar() { // shows info in background //
  rect(0, 0, 1600, 75)
  fill(255);
  textSize(50);
  textStyle(BOLD);
  text("SCORE", 50, 60);
  text(score, width / 2, 60)
  text("NEXT", 1300, 300)
  image(border1, 1300, 1325);
  spawnShape(secondShape);
  for (let x = 0; x < shapeGrid.length; x++) {
    for (let y = 0; y < shapeGrid.length; y++) {
      if (shapeGrid[y][x] === 1) {
        if (secondRandomColor === 'purpleCube') {
          image(purpleCube, 1300 + x * cellSize, 320 + y * cellSize)
        } else if (secondRandomColor === 'blueCube') {
          image(blueCube, 1300 + x * cellSize, 320 + y * cellSize)
        } else if (secondRandomColor === 'greenCube') {
          image(greenCube, 1300 + x * cellSize, 320 + y * cellSize)
        } else if (secondRandomColor === 'redCube') {
          image(redCube, 1300 + x * cellSize, 320 + y * cellSize)
        } else if (secondRandomColor === 'orangeCube') {
          image(orangeCube, 1300 + x * cellSize, 320 + y * cellSize)
        }
      }
    }
  }
}

// Death Screen Functions //
////////////////////////////////////////////////////////////////////////////////

function displayDeathScreen() { // crappy death screen display function //
  fill("blue")
  background(0)
  textSize(100)
  text("GAME OVER", 600, 600)
}

function death() {
  startScreenOn = false;
  deathScreenOn = true;
}


// Loop //
////////////////////////////////////////////////////////////////////////////////
function draw() { // displays screen depending on screen //
  if (startScreenOn === true) {
    displayStartScreen()
  }
  if (gameScreenOn === true) {
    displayGameScreen()
  }
  if (deathScreenOn === true) {
    displayDeathScreen()
  }
}
