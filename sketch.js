
function setup() {
  createCanvas(400,400);
  sprite=createSprite(100,100,10,10)
  sprite.shapeColor='blue'
  
}

function draw() 
{
  background(30);
  if (keyDown(RIGHT_ARROW)){
    sprite.x+=5
  }
  if (keyDown(LEFT_ARROW)){
    sprite.x-=5
  }
  if (keyDown(DOWN_ARROW)){
    sprite.y+=5
  }
  if (keyDown(UP_ARROW)){
    sprite.y-=5
  }
  drawSprites()

}




