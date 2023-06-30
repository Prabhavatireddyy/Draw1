let colorlist = ['turquoise', 'violet', 'indigo', 'blue', 'green', 'light blue', 'orange', 'red', 'purple', '	bisque', 'darkblue', 'deeppink', 'lawngreen', 'plum']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

let isDrawing = false ;

function mouseClicked() {
  if (mouseButton === LEFT) {
    if (isDrawing) {
      isDrawing = false;  // Stop drawing
    } else {
      isDrawing = true;   // Start drawing
    }
  }
}

function draw() {
  noStroke();
  if (isDrawing) {
    fill(random(colorlist));
    ellipse(mouseX, mouseY, 28, 28);
  }
}
