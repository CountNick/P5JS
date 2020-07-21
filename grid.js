function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop()
  }
function draw() {
    // translate(width/2, height/2);
    background(220);
    drawGrid()
  }

function drawGrid(){
    // for (let i = 0; i < 1000; i++) {
    //     fill(random(255), random(255), random(255), random(255));
    //     square(random(windowWidth), random(windowHeight), random(100));
    //     console.log()
    // }
      // distance between squares
  let jump = 40;

  // two for loops are needed to make a grid of squares
  // the outer loop controls how many rows are made
  // the inner loop controls how many columns are made
  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
        fill(random(255), random(255), random(255), random(255));
      rect(x * jump + 10, y * jump + 10, 40, 40);
      
    }
  }
}