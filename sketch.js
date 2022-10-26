function setup() {
  createCanvas(600, 600);
  background(255);
  stroke(0)
}

let rot = 8;

function draw() {
  push()
  translate(width / 2, height /2);
  rotate(rot*2);
  translate(200, 10);
  rotate(rot/2);
  line(50, 70, 10, 10);
  line(50,70,10,10)
  
  pop()
  push()
  translate(width / 2, height / 2);
  rotate(rot*5);
  translate(200, 20);
  
  rot = rot + 2
  if(frameCount == 2){
    // noLoop();
  }

}