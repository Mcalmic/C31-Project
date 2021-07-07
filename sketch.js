const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function preload(){
    
}

function setup(){
   
    var canvas = createCanvas(500, 500)
    engine = Engine.create()
    world = engine.world;
    drops = []
    a = new Drops(100, 100)
    for(var i = 0; i<10; i++){
        drops.push(new Drops(random(0, 500), 0))
    }
    console.log(drops)
}

function draw(){
    for(var i = 0; i < drops.length; i++){
        drops[i].display()
    }
}   

