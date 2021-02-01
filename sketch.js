// Alias or renaming the modules -- Namespacing
//Matter.js is a 2d physics engine library
// It has modules Engine,Body,World,Bodies etc
//Matter.js Documentation :https://brm.io/matter-js/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,box1,box2,box3,box4,box5;
var pig1,pig2,bird;
var log1,log2,log3,log4;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  // JSON -- Java script object notation 
  //JSON is in key value pairs seperated by comma and enclosed in flower braces
  // JSON is use to change any default attibutes of the bodies.
  // var ground_options ={
  //   isStatic: true
  // }

  // ground = Bodies.rectangle(400,380,800,20,ground_options);
  // World.add(world, ground);
 // console.log(ground);

  ground = new Ground(600,380,1200,20); 
  bird= new Bird(100,150);

  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  pig1= new Pig(810,350);  
  log1 = new Log(810,260,300,PI/2);
  
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,220);
  log2= new Log(810,180,300,PI/2);

  box5= new Box(810,160,70,70);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);
}

function draw() {
  background("lightblue");
  strokeWeight(0);
  text(mouseX+','+mouseY,mouseX,mouseY);

  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  bird.display();
  log1.display();
  box3.display();
  box4.display();
  log2.display();
  pig2.display();
  box5.display();
  log3.display();
  log4.display();

}