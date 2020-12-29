
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, stone;
var mango1, mango2, mango3, mango4, mango5;
var stone, tree;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,670,800,20)

	tree=new Tree(500,670,40,100)

	 mango1=new Mango(480,580,20,20)
	 mango2=new Mango(480,580,20,20)
	 mango3=new Mango(520,580,20,20)
	 mango4=new Mango(520,580,20,20)
	 mango5=new Mango(500,580,20,20)

boy=new Boy(200,500,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  


  }




