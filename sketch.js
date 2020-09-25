
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crmp, dst1, dst2, dst3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

                                                                                                                       
	engine = Engine.create();
	world = engine.world;

  crmp = new Ball(400,350);
  dst1 = new Dustbin(200,390,100,20);  
  dst2 = new Dustbin(110,380,20,200); 
  dst3 = new Dustbin(290,380,20,200);
  
	Engine.run(engine);
  
}


function draw() {
  if(keyPressedDown(UP_ARROW))
  {
    crmp.position.y = crmp.postion.y - 10;
  }

  if(keyPressedDown(DOWN_ARROW))
  {
    crmp.position.x = crmp.postion.x + 10;
  }

  if(keyPressedDown(LEFT_ARROW))
  {
    crmp.position.x = crmp.postion.x - 10;
  }

  if(keyPressedDown(RIGHT_ARROW))
  {
    crmp.position.x = crmp.postion.x + 10;
  }

  rectMode(CENTER);
  background(0);
  crmp.display();
  dst1.display();
  dst2.display();
  dst3.display();
  drawSprites();
 
}



