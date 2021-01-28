const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygonImage=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height,1200,20);
    stand1 = new Ground(900,180,190,20)
    stand2 = new Ground(480,310,200,20)
    


   // stand 1 layer 1
    block1 = new Box(405,280,30,40)
    block2 = new Box(435,280,30,40)
    block3 = new Box(465,280,30,40)
    block4 = new Box(495,280,30,40)
    block5 = new Box(525,280,30,40)
    block6 = new Box(555,280,30,40)
    
    //stand 1 layer 2
    block7 = new Box(435,239,30,40)
    block8 = new Box(465,239,30,40)
    block9 = new Box(495,239,30,40)
    block10 = new Box(525,239,30,40)

    //stand 1 layer 3
    block11 = new Box(465,200,30,40)
    block12 = new Box(495,200,30,40)
    
    //stand 1 top
    block13 = new Box(480,159,30,40)

    //stand 2 layer 1
    block14 = new Box(840,150,30,40)
    block15 = new Box(870,150,30,40)
    block16 = new Box(900,150,30,40)
    block17 = new Box(930,150,30,40)
    block18 = new Box(960,150,30,40)

    //stand 2 layer 2
    block19 = new Box(870,110,30,40)
    block20 = new Box(900,110,30,40)
    block21 = new Box(930,110,30,40)

    //stand 2 top
    block22 = new Box(900,70,30,40)

    polygon1 = Bodies.circle(50,200,20)
    World.add(world,polygon1)
    
    slingShot = new SlingShot(this.polygon1,{x:100,y:200})





}

function draw(){
    background(56,44,44);
    Engine.update(engine);
   // strokeWeight(4);
   
    ground1.display();
    stand1.display()
    stand2.display()

 
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    block22.display()

    slingShot.display()



    

    imageMode(CENTER)
    image(polygonImage,polygon1.position.x,polygon1.position.y,40,40)


    
    
      
}

function mouseDragged(){
   Matter.Body.setPosition(this.polygon1, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}