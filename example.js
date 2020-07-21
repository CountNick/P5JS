let bgColor

function setup(){
    createCanvas(windowWidth, windowHeight)
    noLoop()
}

function draw(){
    background(bgColor = color( random(255), random(255), random(255)))
    const step = 50
    for(let x = 0; x < width; x = x + step){
        for(let y = 0; y < height; y = y + step){
            drawRandomLines(x, y, step)
            
        }
    }

}

function drawRandomLines(x, y, step){
    strokeWeight(5)
    // circle(height, y, 15)
    // strokeCap(PROJECT)
    if(random() > 0.5 ){
        // strokeWeight(step - 0.5)
        line(x, y, x + step, y + step)
        circle(x, y, 15)
        // fill(random(255), random(255), random(255), random(255));
    } else{
        // strokeWeight(step / 2)
        line(x + step, y, x, y + step)
        // triangle(x, y, x+step, y+step, x, y)

    }
}