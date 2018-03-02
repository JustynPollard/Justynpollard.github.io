// Game
// Justyn Pollard
// Feb 14, 2018



// Global Variables //
///////////////////////////////////
let playText;
let selectionBarImage;
let paintBrush, paintBrushHighlight, paintBrushClicked;
let bucket, bucketHighlight, bucketClicked;
let colorBar, colorBarDropdown;
let shape, shapeHighlight, shapeClicked;
let textImage, textHighlight, textClicked;
let colorRed, colorOrange, colorBlue, colorGreen, colorIndigo, colorViolet, colorYellow;
let arrow;
let startingScreenOn = true;
let gameScreenOn = false;
let paintBrushOn = false;
let bucketOn = false;
let shapeOn = false;
let textOn = false;
let dropDown = false;
let playButtonColor = 0;
let strokeSize = 8;
let paintColor = "green";
let shapeX1, shapeY1, shapeX2, shapeY2;
let shapePos1 = false;
let shapePos2 = false;
let textPos = false;

// Functions //
///////////////////////////////////
function preload() {
  playText = loadImage("images/playtext.png");
  selectionBarImage = loadImage("images/selectionBar.png");
  paintBrush = loadImage("images/paintBrush.png");
  paintBrushHighlight = loadImage("images/paintBrushHighlight.png");
  paintBrushClicked = loadImage("images/paintBrushClicked.png");
  bucket = loadImage("images/bucket.png");
  bucketClicked = loadImage("images/bucketClicked.png");
  bucketHighlight = loadImage("images/bucketHighlight.png");
  colorBar = loadImage("images/colorBar.png");
  colorBarDropdown = loadImage("images/colorBarDropdown.png");
  arrow = loadImage("images/arrow.png");
  colorRed = loadImage("images/colorRed.png");
  colorOrange = loadImage("images/colorOrange.png");
  colorYellow = loadImage("images/colorYellow.png");
  colorGreen = loadImage("images/colorGreen.png");
  colorBlue = loadImage("images/colorBlue.png");
  colorIndigo = loadImage("images/colorIndigo.png");
  colorViolet = loadImage("images/colorViolet.png");
  shape = loadImage("images/shape.png");
  shapeHighlight = loadImage("images/shapeHighlight.png");
  shapeClicked = loadImage("images/shapeClicked.png");
  textImage = loadImage("images/textImage.png");
  textHighlight = loadImage("images/textHighlight.png");
  textClicked = loadImage("images/textClicked.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function selectionBar() {

  //Selection Bar Image//
  image(selectionBarImage, 0, 0, width, 50);

  //Paint Brush Icon//
  if (mouseX >= 2.5 && mouseX <= 47.5) {
    if (mouseY >= 2.5 && mouseY <= 47.5) {
      if (mouseIsPressed) {
        image(paintBrushClicked, 2.5, 2.5);
        paintBrushOn = true;
        bucketOn = false;
        shapeOn = false;
        textOn = false;
      } else {
        image(paintBrushHighlight, 2.5, 2.5);
      }
    } else {
      image(paintBrush, 2.5, 2.5);
    }
  } else {
    image(paintBrush, 2.5, 2.5);
  }

  //Bucket Icon//
  if (mouseX >= 50 && mouseX <= 97.5) {
    if (mouseY >= 2.5 && mouseY <= 47.5) {
      if (mouseIsPressed) {
        image(bucketClicked, 50, 2.5);
        bucketOn = true;
        paintBrushOn = false;
        shapeOn = false;
        textOn = false;
      } else {
        image(bucketHighlight, 50, 2.5);
      }
    } else {
      image(bucket, 50, 2.5);
    }
  } else {
    image(bucket, 50, 2.5);
  }

  //Color Selector Image//
  if (mouseX >= 97.5 && mouseX <= 252.5) {
    if (mouseY >= 10 && mouseY <= 40) {
      if (mouseIsPressed) {
        arrowClicked();
        bucketOn = false;
        paintBrushOn = false;
        shapeOn = false;
        textOn = false;
      } else {
        colorDisplay();
      }
    } else {
      colorDisplay();
    }
  } else {
    colorDisplay();
  }

  //Shape Draw Image//
  if (mouseX >= 255 && mouseX <= 302.5) {
    if (mouseY >= 2.5 && mouseY <= 47.5) {
      if (mouseIsPressed) {
        image(shapeClicked, 255, 2.5);
        shapeOn = true;
        bucketOn = false;
        paintBrushOn = false;
        textOn = false;
      } else {
        image(shapeHighlight, 255, 2.5);
      }
    } else {
      image(shape, 255, 2.5);
    }
  } else {
    image(shape, 255, 2.5);
  }

  //Text Draw Image//
  if (mouseX >= 305 && mouseX <= 352.5) {
    if (mouseY >= 2.5 && mouseY <= 47.5) {
      if (mouseIsPressed) {
        image(textClicked, 305, 2.5);
        textOn = true;
        shapeOn = false;
        bucketOn = false;
        paintBrushOn = false;
      } else {
        image(textHighlight, 305, 2.5);
      }
    } else {
      image(textImage, 305, 2.5);
    }
  } else {
    image(textImage, 305, 2.5);
  }

  //Stroke Size text//
  fill("black");
  textSize(40);
  text("Stroke Size: " + str(strokeSize), width - 415, 33);
}

function arrowClicked() {
  if (paintColor === "red") {
    paintColor = "orange";
  } else if (paintColor === "orange") {
    paintColor = "yellow";
  } else if (paintColor === "yellow") {
    paintColor = "green";
  } else if (paintColor === "green") {
    paintColor = "blue";
  } else if (paintColor === "blue") {
    paintColor = "indigo";
  } else if (paintColor === "indigo") {
    paintColor = "violet";
  } else if (paintColor === "violet") {
    paintColor = "red";
  }
}

function colorDisplay() {
  if (paintColor === "red") {
    image(colorRed, 100, 10);
  } else if (paintColor === "orange") {
    image(colorOrange, 100, 10);
  } else if (paintColor === "yellow") {
    image(colorYellow, 100, 10);
  } else if (paintColor === "green") {
    image(colorGreen, 100, 10);
  } else if (paintColor === "blue") {
    image(colorBlue, 100, 10);
  } else if (paintColor === "indigo") {
    image(colorIndigo, 100, 10);
  } else if (paintColor === "violet") {
    image(colorViolet, 100, 10);
  }
}

function gameScreen() {
  selectionBar();
}

function playButton(playButtonColor) {
  fill(200 + playButtonColor, 0, 0);
  rect(width / 4 - 10, height / 4 - 10, width / 2 + 20, height / 2 + 20);
  fill(220 + playButtonColor, 0, 0);
  rect(width / 4, height / 4, width / 2, height / 2);
  fill("black");
  textSize(100);
  image(playText, width / 2 - 112, height / 2 - 62);
}


function startingScreen(playButtonColor) {
  playButton(playButtonColor);
}

function paint() {
  if (paintBrushOn === true) {
    paintBrushDraw();
  }
  if (bucketOn === true) {
    bucketDraw();
  }
  if (textOn === true) {
    textDraw();
  }
}

function paintBrushDraw() {
  if (mouseIsPressed) {
    if (mouseY > 50) {
      stroke(paintColor);
      strokeWeight(strokeSize);
      line(mouseX, mouseY, pmouseX, pmouseY);
      noStroke();
    }
  }
}

function bucketDraw() {
  if (mouseIsPressed) {
    if (mouseY > 50) {
      fill(paintColor);
      rect(0, 50, width, height);
    }
  }
}

function textDraw() {
  if (mouseIsPressed && mouseY > 50) {
    textPos = true;
    print("ssssss");
    while (textPos = true) {
      line(mouseX, mouseY - strokeSize / 2, mouseX, 10);
    }
  }
}

function mouseClicked() {
  if (startingScreenOn === true) {
    if (mouseX >= width / 4 - 10 && mouseX <= width / 4 * 3) {
      if (mouseY >= height / 4 - 10 && mouseY <= height / 4 * 3) {
        background("white");
        startingScreenOn = false;
        gameScreenOn = true;
      }
    }
  }
  if (shapeOn === true) {
    if (shapePos1 === true && shapePos2 === false && mouseY > 50) {
      shapeX2 = mouseX;
      shapeY2 = mouseY;
      shapePos2 = true;
      print("shape2");
    }
    if (shapePos1 === false && shapePos2 === false && mouseY > 50) {
      shapeX1 = mouseX;
      shapeY1 = mouseY;
      shapePos1 = true;
      print("shape1");
    }
    if (shapePos1 === true && shapePos2 === true) {
      fill(paintColor);
      rect(shapeX1, shapeY1, shapeX2 - shapeX1, shapeY2 - shapeY1);
      shapePos1 = false;
      shapePos2 = false;
    }
  }
}

function keyTyped() {
  if (key === "w") {
    strokeSize = strokeSize + 2;
  }
  if (key === "s") {
    strokeSize = strokeSize - 2;
  }
  if (key === "q") {
    background("white");
  }
}

// Loop //
///////////////////////////////////
function draw() {
  if (startingScreenOn === true) {
    if (mouseX >= width / 4 - 10 && mouseX <= width / 4 * 3) {
      if (mouseY >= height / 4 - 10 && mouseY <= height / 4 * 3) {
        startingScreen(50);
      } else {
        startingScreen(0);
      }
    } else {
      startingScreen(0);
    }
  }
  if (gameScreenOn === true) {
    gameScreen();
    paint();
  }

}
