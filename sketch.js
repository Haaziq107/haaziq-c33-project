const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground;
var particle=[];
var plinko=[];
var division=[];
var divisionHeight=300;
var score=0;
var turn=0;
var GameState="PLAY";
function setup() {
  var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
  
  ground = new Ground(240,800,480,10)

  for (var k=0; k<=width; k=k+80){
    division.push(new Division(k, 650,10,divisionHeight));
  }

  for (var j=40; j <=width; j=j+50){
    plinko.push(new Plinko(j,75,10));
  }
  for (var j=70; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,175,10));
  }
  for (var j=40; j <=width; j=j+50){
    plinko.push(new Plinko(j,275,10));
  }
  for (var j=70; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,375,10));
  } 
  textSize(30);
  fill("white");
}

function draw() {
  background("black");  
  Engine.update(engine); 
  ground.display();
  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

  for (var j=0; j < particle.length; j++){
    particle[j].display();
  }

  for (var k=0; k < division.length; k++){
    division[k].display();
  }

  for (var i=0; i< plinko.length; i++){
     plinko[i].display();
  }
  text("Score:" + score, width-450, 50);
  text("500", 10, 530);
  text("500", 100, 530);
  text("100", 180, 530);
  text("100", 250, 530);
  text("200", 340, 530);
  text("200", 420, 530);

  if(particle !=null){
    particle.display();
    if(particle.body.position.y>760){

      if(particle.body.position.x>300){

        score=score+500;
        particle=null;
        if(turn>=5) GameState="end";
      }
    }
  }
  if(particle !=null){
    particle.display();
    if(particle.body.position.y>301){

      if(particle.body.position.x>600){

        score=score+100;
        particle=null;
        if(turn>=5) GameState="end";
      }
    }
  }
  if(particle !=null){
    particle.display();
    if(particle.body.position.y>601){

      if(particle.body.position.y>900){

        score=score+200;
        particle=null;
        if(turn>=5) GameState="end";
      }
    }
  }
  
  drawSprites();
}

function mousePressed(){
  if(gameState === "end"){
    count++;
    particle=new (mouseX ,10 ,10 ,10);
  }
}
