function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop()
  }
function draw() {
    // translate(width/2, height/2);
    background(220);
    drawStrokes()
  }

function drawStrokes(){
    for (let i = 0; i < windowHeight; i++) {
        let r = random(windowWidth);
        strokeWeight(10);
        

        stroke(random(255), random(255), random(255), random(255));
        
        let x1 = 0
        let y1 = i
        let x2 = 50 + r
        let y2 = i

        line(x1, y1 , x2, y2);

        if(x2 > 500){
            curvePoint(x1, x1, y1, y2, 1)
        }
        // bezier(85, 20, 10, 10, 90, 90, 15, 80);


        // console.log(lines)
      }
}