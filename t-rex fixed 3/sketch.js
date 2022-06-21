var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var score = 0
var cloud, cloudsGroup, cloudImage;
var obst1, obst2, obst3, obst4, obst5, obst6


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 obst1 = loadImage("obstacle1.png")
 obst2 = loadImage("obstacle2.png")
 obst3 = loadImage("obstacle3.png")
 obst4 = loadImage("obstacle4.png")
 obst5 = loadImage("obstacle5.png")
 obst6 = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text("Score: "+score,500,50)
  score=score+Math.round(frameCount/.1)
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacales()
  drawSprites();
}
function spawnObstacales(){
  if(frameCount % 60 === 0){
    obstacales=createSprite(600,165,10,40)
    obstacales.velocityX=-7
    var rand=Math.round(random(1,6))
    switch(rand){
      case 1:obstacales.addImage(obst1)
      break;
      case 2:obstacales.addImage(obst2)
      break;
      case 3:obstacales.addImage(obst3)
      break;
      case 4:obstacales.addImage(obst4)
      break;
      case 5:obstacales.addImage(obst5)
      break;
      case 6:obstacales.addImage(obst6)
      break;
    }
    obstacales.scale=0.5
    obstacales.lifetime= 205
  }
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

