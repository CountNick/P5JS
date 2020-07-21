let multiplier = 0.77;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    angleMode(DEGREES)
    noLoop();
}

function draw(){
    noFill()
    strokeWeight(2)

    const size = 50
    const across = 9
    const down = 13
    const rotateMult = 3;



    for (let x = 0; x < across; x++) {
        for (let y = 0; y < down; y++) {
            const plusMinus = random() > .5 ? 1 : -1;
            const rotateAmt = y * plusMinus * random() * rotateMult * multiplier;
            push();
            translate(x*size+size, y*size+size);
            rotate(rotateAmt)
            fill(random(255), random(255), random(255), random(255));
            rect(0, 0, size, size);
            // circle(0, 0 , 10)
            
            pop();
        }
    }
}