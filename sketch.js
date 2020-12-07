/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
*/
var hr;
var mn;
var sc;

var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400, 400);
 
  /*engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  */
 
 
 angleMode(DEGREES);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  

  translate(200, 200);
  rotate(-90);

  hr = hour();
 mn = minute();
 sc = second();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

push();
rotate(scAngle);
stroke(255, 0, 0);
strokeWeight(7);
line(0, 0, 100, 0);
pop();

push();
rotate(mnAngle);
stroke(255, 0, 0);
strokeWeight(7);
line(0, 0, 110, 0);
pop();

push();
rotate(hrAngle);
stroke(255, 0, 0);
strokeWeight(7);
line(0, 0, 120, 0);
pop();

stroke(255,0,255); point(0,0) 
//drawing the arcs 
strokeWeight(10);
 noFill(); 
 //Seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle); 
  //Minutes
   stroke(0,255,0);
   arc(0,0,280,280,0,mnAngle);
    //Hour 
    stroke(0,0,255); 
    arc(0,0,260,260,0,hrAngle);

  drawSprites();
}