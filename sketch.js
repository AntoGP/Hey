function preload(){
teapot=loadModel("osu_keycap_final.stl",true);
}
function setup() {
  
  createCanvas(windowWidth,windowHeight, WEBGL);
}

function draw() {
  background(195,172,167);
  push();
  translate(-width/2,-height/2)
  fill(17,202,243)
 ellipse(mouseX,mouseY,100,100)
  pop();
  push();
  scale(3);
  rotateX(PI/2);
  rotateZ(frameCount*0.020);
  noStroke();
  ambientLight(40)
  directionalLight(0,0,255,0,1,0)
  model(teapot)
  pop();
  normalMaterial();
  
}