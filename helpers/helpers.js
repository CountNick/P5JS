function hexagon (posX, posY, radius) {                     
    const rotAngle = 360 / 6
    beginShape()
    for (let i = 0; i < 6; i++) {
      const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
      vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
}
  
function pointOnCircle (posX, posY, radius, angle) {         
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}

function randomSelectTwo () {
    const rando = random(1)
    if (rando > 0.5) {
      return true
    } else {
      return false
    }
  }

function generateRandomColor(array){
   
    const randomColor = floor(random(0, array.length))
    
    return array[randomColor]
}