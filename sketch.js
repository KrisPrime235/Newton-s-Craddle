
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	Bob1 = new Bob(650,350, 50);
	Bob2 = new Bob(700,350, 50);
	Bob3 = new Bob(750,350, 50);
	Bob4 = new Bob(800,350, 50);
	Bob5 = new Bob(850,350, 50);
	Stand1 = new Stand(750, 100, 300, 50);

	Rope1 = new Rope(Bob1.body, Stand1.body, Bob1.x-2, 0)
	

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  background(0,221,225);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  Stand1.display();

  Rope1.display();
  
  drawSprites();
 
}



