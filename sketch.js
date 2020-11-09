const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// Creating the variables
var ground;
var division1,division2,division3,division4;
var division5,division6,division7;
var plinko;
var divisionHeight=300;

// Creating the arrays
var plinkos=[];
var particles=[];
var divisions=[];

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  // Creating the platform
  ground= new Ground(240,800,480,20);
  
  // Creating the boxes
  division1= new Division(5,700,10,220);
  division2= new Division(80,700,10,220);
  division3= new Division(155,700,10,220);
  division4= new Division(230,700,10,220);
  division5= new Division(305,700,10,220);
  division6= new Division(380,700,10,220);
  division7= new Division(455,700,10,220); 
}

function draw() {
  background("black"); 
  Engine.update(engine); 

  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  
  // Displaying the objects
  ground.display();
  
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  plinko.display();
}