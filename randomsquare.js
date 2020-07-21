function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop()
  }
function draw() {
    // translate(width/2, height/2);
    background(220);
    drawCircles()
  }

function drawCircles(){
    for (let i = 0; i < 1000; i++) {
        fill(random(255), random(255), random(255), random(255));
        square(random(windowWidth), random(windowHeight), random(100));
        
    }
}