const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


var tree, stone,ground, thrower;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,
mango9,mango10,mango11;
var world,boy,boy_Img;



function preload(){
	boy_Img=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	boy = Matter.Bodies.rectangle(200,550,10,10);

	tree = new Tree(1050,580);

	ground = new Ground(width/2,600,width,20);

	stone = new Stone(175,600,30,30);
	mango1 = new Mango(950,180,30,30);
	mango2 = new Mango(1100,190,40,40);
	mango3 = new Mango(1200,220,30,30);
	mango4 = new Mango(1150,120,30,30);
	mango5 = new Mango(1000,200,30,30);
	mango6 = new Mango(1040,80,30,30);
	mango7 = new Mango(1090,50,30,30);
	mango8 = new Mango(1180,170,20,20);
	mango9 = new Mango(1050,150,20,20);
	mango10 = new Mango(980,120,30,30);
	mango11 = new Mango(930,245,30,30);
  
	
  
	thrower = new constraint(stone.body,{x:170,y:500});
	
	
	Engine.run(engine);

}

function draw() {

  background(230);

  //Add code for displaying text here!

  imageMode(CENTER);
  image(boy_Img,boy.position.x,boy.position.y,100,200);

  tree.display();

  ground.display();

  stone.display();


   
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  
  thrower.display();



  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);


  
  fill("black")
  stroke(255);
  textSize(40)
  text("Press Space to get a second Chance to Play!!",50,50)


}


function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  thrower.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stone.body,{x:140,y:315});
    thrower.attach(stone.body);
  }
}
