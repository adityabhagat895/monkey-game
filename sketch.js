
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground,survivalTime=0;
var banana,bananaimage,bananascore;
var obstacle,obstacleimage;
var obstaclesGroup,bananasGroup
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 bananaimage=loadImage("banana.png");
  obstacleimage=loadImage("obstacle.png");
}
function setup() {
  createCanvas(700,400);
monkey=createSprite(30,200,20,20);
  monkey.addAnimation("runnig",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,235,900,10)
  ground.veocityX=-4;
  ground.x=ground.width/2;
  
}


function draw() {
background("white");
  survivalTime=Math.round(frameCount/frameRate())
  text("Score: "+survivalTime,30,30);
  createBanana();
  createObstacle();
  if(keyDown("space")){
    monkey.velocityY=-5
  }
  monkey.velocityY=monkey.velocityY+0.2;
  monkey.collide(ground)
  drawSprites();
  
}
function createBanana(){
 
  if(frameCount%80===0){
  banana=createSprite(400,Math.round(random(120,200)),20,20);
    banana.addImage("banana",bananaImage);
    banana.scale=0.07;
 banana.velocityX=-4;
    banana.lifetime=100;
 
  }

}
function createObstacle(){
  if(frameCount%300===0){
    obstacle=createSprite(400,210,20,20);
    obstacle.addImage("obstacle",obstacleimage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    obstacle.lifetime=100;
  }
}




