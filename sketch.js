// Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,ground;
var ground_options;
var ball,ball_options;
function setup() {
  createCanvas(400,400);

  // Create an engine 
  engine = Engine.create();

  world = engine.world;

 ground_options = {
    isStatic : true
  }


//create a rectangular body and save it inside the variable object//
  ground = Bodies.rectangle(200,390,400,20, ground_options);


  // Add the body that we have created to the world.// 
  World.add(world, ground);

  ball_options = {
  restitution:1.0
  }

  //Create the ball's body//
  ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
  circle(ball.position.x,ball.position.y,20);
}