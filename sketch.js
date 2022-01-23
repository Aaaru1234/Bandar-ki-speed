
var monkeyrun , mokeyrunImg;
var monkeystand , momkeystandImg;
function preload(){
  bgImage = loadImage("bg.jpg");
  monkeyrunImg = loadImage("monkeyrun.png");
 
}

function setup(){
  createCanvas(1200,600)
  
bg =createSprite(600,300,1200,600)
bg.addImage("bg",bgImage); 
bg.scale = 2.5
bg.velocityX = -3;

monkeyrun =createSprite(100,500,10,10);
monkeyrun.addImage("monkeyrun",monkeyrunImg);
}

function draw(){
  background("white");
 if(bg.x<0)
 {
  bg.x = bg.width
 }
  
drawSprites()
}
