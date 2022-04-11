
function preload()
{
marioRunning=loadAnimation("mario1img.png","mario2.png") 
mariostanding=loadAnimation("mario222.png") 
}


function setup()
{
  createCanvas(600,200);
  ground=createSprite(0,190,1200,10)
  ground.x=ground.width/2
  mario=createSprite(50,165,20,50)
  mario.addAnimation("running",marioRunning)
  mario.scale=0.1;
  
}


function draw()
{
  background("red");
  ground.velocityX=-6
  if(ground.x<0){
   ground.x=ground.width/2
  }
  if(keyDown("space")&&mario.y>=140)
  {
  mario.velocityY=-12
  }
  mario.velocityY=mario.velocityY+0.8
  if(keyIsDown("space"))
  {
mario.changeAnimation("running",mariostanding)
  }
  
 
 mario.collide(ground)
  drawSprites();
}
  
  