const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(250,350,50,50);
    box2 = new Box(150,350,50,50);
    ground1 = new Ground(200 , height , 400 , 20)
}

function draw(){
    background("blue");
    Engine.update(engine);
    box1.display();
    box2.display();
   ground1.display();
}