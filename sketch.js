const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground; 
var fruit,rope;
var fruit_com;


function preload(){
}

function setup() {
  createCanvas(600,700);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(300, 690, 600, 20);

  rope = new Rope(7,{x:245, y:30})
  fruit = Bodies.circle(300, 300, 20);
  Matter.Composite.add(rope.body,fruit);

  fruit_com = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)


}

function draw() {
  background(51);
  rope.show();
  ellipse(fruit.position.x, fruit.position.y,30,30);
  Engine.update(engine);
  ground.show();

} 
