
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
background("white");

  stroke("white");
  textSize(20);
  fill("white");
  text("Score"+ score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
   text("Survival Time : "+ survivalTime,100,50);
  
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
   
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log(ground.x);
  
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
   
food();
  Obstacles();
  
  drawSprites();
}

function Obstacles(){
   if (frameCount % 300 === 0){
obstacle = createSprite(400,320,40,10);
  obstacle.addImage(obstacleImage);
   obstacle.velocityX = -7;
  obstacle.scale = 0.15;
  obstacle.lifetime = 200;
     obstacleGroup.add(obstacle);
   }
}

function food(){
  if(frameCount %80 === 0){
    banana = createSprite(400,120,10,10);
    banana.addImage(bananaImage);
     banana.y = Math.round(random(120,200));
    banana.velocityX = -3;
    banana.lifetime =200;
    banana.scale = 0.15;
    
      monkey.depth = banana.depth;
  monkey.depth = monkey.depth + 1;
   
    FoodGroup.add(banana);
  }
}

