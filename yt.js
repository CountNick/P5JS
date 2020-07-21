const crystal_size = 500
const sides = 6
const palette = []

function setup(){
    createCanvas(530, 530)

    palette.push(color(255, 57, 154), color(4, 0, 152))
    console.log(palette)
    noLoop()
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw(){
    testLines()
    // outlineShape()
    simpleLines()
    cricles()
}

function cricles(){
    const numShapes = sides
    const angle = 360 / numShapes
    const shapeSize = (crystal_size / 2) * 0.93
    const position = (crystal_size / 2 ) - (shapeSize / 2)
    const strokeColor = generateRandomColor(palette)

    stroke(strokeColor)
    strokeWeight(1)
    push()
        translate(width / 2, height / 2)
        for (let i = 0; i < numShapes; i++) {
            ellipse(position, 0, shapeSize, shapeSize)
            rotate(angle)
        }
    pop()
}

function simpleLines(){
    const stepsOut = 8
    const numSteps = randomSelectTwo() ? stepsOut : floor(stepsOut * 1.25)
    const step = (crystal_size / 2) / numSteps
    const start = floor(random(0, numSteps))
    const stop = floor(random(start, numSteps + 1))

    let numShapes = randomSelectTwo() ? sides : sides * 2
    const weight = randomSelectTwo() ? 1 : 3



    const randomColor = generateRandomColor(palette)
    console.log(randomColor)
    

    const strokeColor = randomColor
    const angle = 360 / numShapes
    noFill()
    stroke(strokeColor)
    strokeWeight(weight)
    
    push()
        translate(width/2, height/2)


        
        for(let i=0; i< numShapes; i++){
            line(start * step, 0, stop * step, 0)
            rotate(angle)
        }

        
    pop()

}



function outlineShape(){
    const strokeColor = generateRandomColor(palette)
    const weight = randomSelectTwo() ? 1 : 3
    const hexagonTrue = randomSelectTwo()
    
    strokeWeight(weight)

    stroke(strokeColor)
    push()
    translate(width/2, height/2)
    if(hexagonTrue){
        hexagon(0, 0, crystal_size / 2)
    } else{
        ellipse(0, 0, crystal_size, crystal_size)
    }
    
    pop()
}

function testLines(){

    
    let numShapes = randomSelectTwo() ? sides : sides * 2



    const randomColor = generateRandomColor(palette)
    console.log(randomColor)
    

    const strokeColor = randomColor

    noFill()
    stroke(1)
    push()
        translate(width/2, height/2)
        stroke(palette[0])
        ellipse(0, 0, crystal_size, crystal_size)
        stroke(strokeColor)
        const angle = 360 / numShapes
        for(let i=0; i< numShapes; i++){
            line(0, 0, 0, crystal_size / 2, 0)
            rotate(angle)
        }

        
    pop()

}


