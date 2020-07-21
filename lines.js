function setup(){
    createCanvas(windowWidth, windowHeight)
    noLoop()
}

function draw(){
    background('PEACHPUFF')
    const step = 30
    for (let x = 0; x < width; x = x + step) {
        
        
        for (let y = 0; y < height; y = y + step) {
            strokeWeight(3);
        line(0, y, x , 0 )
        }
    }
}