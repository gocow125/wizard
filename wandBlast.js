var wand;
var wand2;

function preload() {
    wand = loadImage('wand.png');
    wand2 = loadImage('wand2.png');
}

function setup() {

    createCanvas(800,800);

}


function draw(){
    background("#773391");
    
    image(wand, mouseX - 100, mouseY - 100, 100, 120);
    
    if (mouseIsPressed){
        background("#ff00bb");
       image(wand2, mouseX - 100, mouseY - 100, 200, 200);
    
 }
}

