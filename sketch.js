
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var plat1;
var plat2;
var log1
var log2;
var log3;
var ground;
var angle1=60;
var angle2=120;
var angle3=180;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }

  var ball2_options = {
      restitution: 0.95,
      frictionAir:0.01
      }

  var ball3_options = {
        restitution: 0.95,
        frictionAir:0.01
        }

  var ball4_options = {
          restitution: 0.95,
          frictionAir:0.01
          }

 var ball5_options = {
            restitution: 0.95,
            frictionAir:0.01
            }
	   
var ground_options ={
		 isStatic: true
	   };



     
  ground = Bodies.rectangle(400,580,1000,40,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(400,10,50,ball_options);
  World.add(world,ball);
  
  ball2 = Bodies.circle(440,10,50,ball2_options);
  World.add(world,ball);

  ball3 = Bodies.circle(480,10,50,ball3_options);
  World.add(world,ball);

  ball4 = Bodies.circle(520,10,50,ball4_options);
  World.add(world,ball);

  ball5 = Bodies.circle(560,10,50,ball5_options);
  World.add(world,ball);
  

  log1 = Bodies.rectangle(400,200,100,20)
  World.add(world,log1);

  log2 = Bodies.rectangle(400,200,100,20)
  World.add(world,log2)

  ball.debug=true,
 // ball.setCollider("circle",0,0,40,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("orange")
  ellipse(ball.position.x,ball.position.y,20);

  fill("orange")
  ellipse(ball2.position.x,ball2.position.y,20);

  fill("orange")
  ellipse(ball3.position.x,ball3.position.y,20);

  fill("orange")
  ellipse(ball4.position.x,ball4.position.y,20);

  fill("orange")
  ellipse(ball5.position.x,ball5.position.y,20);


  fill("blue")
  rect(ground.position.x,ground.position.y,800,20);
  
  Matter.Body.rotate(log1,angle1);
  push();
  rotate(angle1);
   
  rect(log1.position.x,log1.position.y,100,20);
  pop()
  angle1=angle1+5
 
  Matter.Body.rotate(log2,angle2);
  push();
  rotate(angle2);
   
  rect(log2.position.x,log2.position.y,100,20);
  pop()
  angle2=angle2+5
 
 

  drawSprites();
 
}



