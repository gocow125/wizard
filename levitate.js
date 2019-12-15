var wand;
let bx;
let by;
let cx;
let cy;
let boxSize = 75;
let circleSize = 75;
let overBox = false;
let overCircle = false;
let bLocked = true;
let cLocked = true;
let bxOffset = 0.0;
let byOffset = 0.0;
let cxOffset = 0.0;
let cyOffset = 0.0;

function preload() {
    wand = loadImage('wand.png');
}

function setup(){
    
    createCanvas(800,800);
    bx = width / 2.0;
    by = height / 2.0;
    cx = width / 5.0;
    cy = height / 5.0;
    
    rectMode(RADIUS);
    strokeWeight(2);
}

function draw(){
    background("#25effa");
     
    
    // Test if the cursor is over the shapes
    
    
    if (
        mouseX > bx - boxSize &&
        mouseX < bx + boxSize &&
        mouseY > by - boxSize &&
        mouseY < by + boxSize
    ) {
        overBox = true;
        overCircle = false;

        if (bLocked) {
            stroke(255);
            fill(230, 0, 218);
            
        }
    } else {
        stroke(156, 39, 176);
        fill(244, 122, 158);
        overBox = false;
    }
    rect(bx, by, boxSize, boxSize);
    
    // Draw the shapes
    
    
    

    if (
        mouseX > cx - circleSize &&
        mouseX < cx + circleSize &&
        mouseY > cy - circleSize &&
        mouseY < cy + circleSize
    ) {
        overBox = false;
        overCircle = true;

        if (cLocked) {
            
            stroke(255);
            fill(230, 0, 218);
            
        }
    } else {
        stroke(156, 39, 176);
        fill(244, 122, 158);
        overCircle = false;
        
    }
    ellipse(cx, cy, circleSize, circleSize);
    image(wand, mouseX - 50, mouseY - 50, 100, 120);
}


function mousePressed() {
    if (overBox) {
        bLocked = false;
        
        
    } else {
        bLocked = true;
    }

    if (overCircle) {
        cLocked = false;
        
        
    } else {
        cLocked = true;
    }

   
}


function mouseDragged() {
    if (!bLocked) {
        bx = mouseX - bxOffset;
        by = mouseY - byOffset;
        
    }

    if (!cLocked) {
        cx = mouseX - cxOffset;
        cy = mouseY - cyOffset;
        
    }

}



function mouseReleased() {
    bLocked = true;
    cLocked = true;
} 