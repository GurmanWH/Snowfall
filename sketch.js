 
 var child1Img;
 var child1;
 var child2;
 var child2Img;
 var bgImg;



 function preload(){
  child1Img=loadImage("child1.jpg")
  child2Img=loadImage("child2.jpg")
  bgImg=loadImage("snow1.jpg","snow3.jpg",'snow2.jpg')
 }


 function setup() {
  createCanvas(1000,400);
  child1=createSprite(450,300,10,10)
  child1.addImage(child1Img)
  child1.scale=0.5
  child2=createSprite(200,320,10,10)
  child2.addImage(child2Img)
  child2.scale=0.2

  
}

function draw() {
  background(bgImg);

  drawSprites();
}