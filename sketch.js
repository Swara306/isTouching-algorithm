var fixedRect , movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(400, 200, 50, 50);
  movingRect= createSprite(200,200,40,40);
  fixedRect.debug=true;
  movingRect.debug=true;
  movingRect.shapeColor= "cyan";
  fixedRect.shapeColor= "cyan";
}

function draw() {
  background(0);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x - movingRect.x < fixedRect.width/2+ movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor= "pink";
    fixedRect.shapeColor= "pink";
  }
else{
  movingRect.shapeColor= "cyan";
  fixedRect.shapeColor= "cyan";
}
  drawSprites();
}