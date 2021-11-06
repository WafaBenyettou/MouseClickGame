var count = 0;
let bubbles = [];
const resultDisplay = document.getElementById('result')


function score() {
  document.getElementById('count').innerHTML = "Score : " + ++count;
  count = count;
}

function setup() {
  createCanvas(displayWidth, displayHeight);
 
  for (let i = 0; i < 70; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 70);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
     score();
     
    }
  }
}



function draw() {
    background(255);
  for (let i = 0; i < bubbles.length; i++) {

    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-4, 4);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}