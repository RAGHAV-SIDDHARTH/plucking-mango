
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var mango1,mango2,mango3,mango4,mango5;
var tree;
var boy;
function preload()
{
	mango1.addImage=loadImg("mango.png");
	mango2.addImage=loadImg("mango.png");
	mango3.addImage=loadImg("mango.png");
	mango4.addImage=loadImg("mango.png");
	mango5.addImage=loadImg("mango.png");
	boy.addImage=loadImg("boy.png");
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  drawSprites();
 
}
function keyPressed(){
	if(keycode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		laucherObject.attach(stoneObj.body);
	}
}


