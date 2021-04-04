var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function setup() {
  createCanvas(480, 690);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 40; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,60));
  }

  //create 2nd row of plinko objects
  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,130));
  }

  //create 3rd row of plinko objects
  for(var j = 40; j<=width;j=j+50){
    plinkos.push(new Plinko(j,200));
  }

  //create 4th row of plinko objects
 for(var j= 15; j<=width-10;j=j+50){
   plinkos.push(new Plinko(j,270));
 }
 //5th row of plinko objects
 for(var j= 40; j<=width;j=j+50){
  plinkos.push(new Plinko(j,340));
}
  
}
 

function draw() {
  background("black");

 if(frameCount % 50 === 0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10,10));
  }

  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the particles 
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

}