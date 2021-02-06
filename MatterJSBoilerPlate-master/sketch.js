
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1=new bob(400, 650, 10);
bobObject2=new bob(420, 650, 10);
bobObject3=new bob(440, 650, 10);
bobObject4= new bob(460, 650, 10);
bobObject5=new bob(480, 650, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

 
}



