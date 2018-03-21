// p5js  Hangman Project //
// Justyn Pollard //
// Feb 27, 2018 //

// global variables //
let startScreenOn = true;
let gameScreenOn = false;
let lostScreenOn = false;
let easy = true;
let medium = false;
let hard = false;
let points = 0;
let hardButtonIcon, mediumButtonIcon, easyButtonIcon;
let knooseIcon;
let hangmanTitle;
let charUnderscore;
let easyWords = ["HANGMAN", "BATMAN", "CANADA", "TELESCOPE", "KOREA", "AFRICA", "RUSSIA"];
let mediumWords = ["WAKANDA", "UGANADA", "ARGENTINA", "PARLAMENT", "MIGRATION"];
let hardWords = ["HANDKERCHIEF", "CONSCIENCE", "MILLENNIUM", "PHARAOH", "CONVALESCE", "SUPERSEDE", "ECSTASY", "CARIBBEAN"];
let chosenWord = "unchosen";
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let alphabet2 = [];
let alreadySelected = [];
let charSelected;


// Setup Functions //
function preload() {
  cursor = loadImage("images/cursor.png");
  playButtonIcon = loadImage("images/playButtonIcon.png")
  hardButtonIcon = loadImage("images/hardButtonIcon.png");
  hardButtonIconSelected = loadImage("images/hardButtonIconSelected.png");
  mediumButtonIcon = loadImage("images/mediumButtonIcon.png");
  mediumButtonIconSelected = loadImage("images/mediumButtonIconSelected.png");
  easyButtonIcon = loadImage("images/easyButtonIcon.png");
  easyButtonIconSelected = loadImage("images/easyButtonIconSelected.png");
  hangmanTitle = loadImage("images/hangmanTitle.png");
  charUnderscore = loadImage("images/charUnderscore.png");
  knooseIcon = loadImage("images/knoose.png")
}

function setup() {
  createCanvas(2400, 1217);
}
// Functions //
function startScreen() {
  image(hangmanTitle, width / 2 - 250, 50);
  hardButton();
  mediumButton();
  easyButton();
  playButton();
}

function gameScreen() {
  difficulty()
  underscores()
  hangmanScreen()
  alphabetKeyboard()
  drawingMan()
}

function lostScreen() {
  background("black")
  fill("white")
  textSize(150)
  text("YOU LOST!!!!!!", 700, height / 2)
}

function playButton() {
  if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= 500 && mouseY <= 800) {
    if (mouseIsPressed) {
      background("white")
      startScreenOn = false;
      gameScreenOn = true;
    } else {
      image(playButtonIcon, width / 2 - 262.5, 492.5, 525, 315);
    }
  } else {
    fill("white");
    noStroke();
    rect(0, 492.5, width, 315);
    image(playButtonIcon, width / 2 - 250, 500);
  }
}

function easyButton() {
  if (mouseX >= width / 2 - 400 && mouseX <= width / 2 - 150 && mouseY >= 200 && mouseY <= 350 && mouseIsPressed) {
    if (easy === false) {
      easy = true;
      hard = false;
      medium = false;
    }
  }
  if (easy === true) {
    image(easyButtonIconSelected, width / 2 - 400, 200);
  } else {
    image(easyButtonIcon, width / 2 - 400, 200);
  }
}

function mediumButton() {
  if (mouseX >= width / 2 - 125 && mouseX <= width / 2 + 125 && mouseY >= 200 && mouseY <= 350 && mouseIsPressed) {
    if (medium === false) {
      easy = false;
      hard = false;
      medium = true;
    }
  }
  if (medium === true) {
    image(mediumButtonIconSelected, width / 2 - 125, 200);
  } else {
    image(mediumButtonIcon, width / 2 - 125, 200);
  }
}

function hardButton() {
  if (mouseX >= width / 2 + 150 && mouseX <= width / 2 + 400 && mouseY >= 200 && mouseY <= 350 && mouseIsPressed) {
    if (hard === false) {
      easy = false;
      hard = true;
      medium = false;
    }
  }
  if (hard === true) {
    image(hardButtonIconSelected, width / 2 + 150, 200);
  } else {
    image(hardButtonIcon, width / 2 + 150, 200);
  }
}

function underscores() {
  charX = width / 2 - (chosenWord.length / 2 * 100)
  for (i = 0; i < chosenWord.length; i++) {
    image(charUnderscore, charX, height - 50);
    if (charSelected === chosenWord[i]) {
      fill("black");
      textSize(70);
      text(charSelected, charX, height - 55);
    }
    charX = charX + 100;
  }
}

function difficulty() {
  if (chosenWord === "unchosen") {
    if (easy === true) {
      chosenWord = easyWords[Math.floor(Math.random() * easyWords.length)];
    }
    if (medium === true) {
      chosenWord = mediumWords[Math.floor(Math.random() * mediumWords.length)];
    }
    if (hard === true) {
      chosenWord = hardWords[Math.floor(Math.random() * hardWords.length)];
    }
  }
}

function hangmanScreen() {
  fill("black");
  rect(width / 2 - 500, 100, 1000, 1000);
  rect(width / 2 + 550, 560, 450, 400);
  rect(width / 2 - 480, 1100, 50, -1000);

  fill("white");
  rect(width / 2 - 495, 105, 990, 990);
  rect(width / 2 + 555, 565, 440, 390);

  fill("black");
  rect(width / 2 - 480, 1100, 25, -900);
  rect(width / 2 - 480, 200, 500, 25);

  image(knooseIcon, width / 2 - 35, 225);

}

function drawingMan() {
  if (points >= 2) {
    ellipse(1211, 430, 100, 100);
    if (points >= 3) {
      rect(1198.5, 480, 25, 300);
      if (points >= 4) {
        rect(1198.5, 520, -25, 150);
        if (points >= 5) {
          rect(1223.5, 520, 25, 150);
          if (points >= 6) {
            rect(1198.5, 750, -25, 200);
            if (points >= 7) {
              rect(1223.5, 750, 25, 200);
            }
          }
        }
      }
    }
  }
}

function alphabetKeyboard() {
  alphabetX = width / 2 + 565;
  alphabetY = 565;

  for (i = 0; i < alphabet.length; i++) {
    alphabetX = alphabetX + 70;
    if (i % 6 === 0) {
      alphabetY = alphabetY + 70;
      alphabetX = width / 2 + 565;
    }
    if (alphabet2.length < 26) {
      alphabet2.push([alphabetX, alphabetY]);
    }
    if (mouseX >= alphabet2[i][0] && mouseX <= alphabet2[i][0] + 70 && mouseY >= alphabet2[i][1] - 70 && mouseY <= alphabet2[i][1]) {
      if (mouseIsPressed) {
        charSelected = alphabet[i];
        find = alreadySelected.indexOf(alphabet[i]);
        if (find === -1) {
          alreadySelected.push(alphabet[i]);
          find1 = chosenWord.indexOf(alphabet[i]);
          if (find1 === -1) {
            points = points + 1;
          }
        }
        alphabet[i] = " ";
      } else {
        charColor = "blue";
      }
    } else {
      charColor = "black";
    }
    fill(charColor);
    textSize(70);
    if (alphabet[i] === "I") {
      text(alphabet[i], alphabetX + 17.5, alphabetY);
    } else {
      text(alphabet[i], alphabetX, alphabetY);
    }
  }
}




// Loop //
function draw() {
  if (startScreenOn === true) {
    startScreen();
  }
  if (gameScreenOn === true) {
    gameScreen();
    if (points >= 8) {
      gameScreenOn = false;
      lostScreenOn = true;
    }
  }
  if (lostScreenOn === true) {
    lostScreen();
  }
}
