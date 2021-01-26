const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var a,invisible,enemy1,playerimg, fireGroup, enemy2,enemimg,button,fire,bg
this.destroy = this.remove

function preload(){
//playerimg = loadImage("images (1).jpg")
//enemimg = loadImage("images.jpg")
bg = loadImage("images(1).jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  //player = createSprite(400, 200, 50, 50);
  //player.addImage(playerimg)

  engine = Engine.create();
  world = engine.world;
  player = new Player(400,200,120,80)
  ground = new Ground(width/2,height/1.2,width,20);
  // ground.visible = false
  invisible = createSprite(width/2,height,width,20)
  invisible.visible = false
  window.focus()
  fireGroup = new Group()
  enemy2 = new Enemy(random(880,1255),random(450,500),50,50)
}

function draw() {
  ground.display() 
  background(bg); 
  Engine.update(engine);
 
  player.display()
  enemy2.ene()
  button = createButton("fire")
  button.position(400,400)
  button.style('borderRadius', 50)
//   if(mousePressed === button){
// fire = createSprite(player.x,player.y,10,15)
// fire.velocityX = 6
// fireGroup.add(fire)
//   }

button.mousePressed(function(){
  fire = createSprite(player.x,player.y,10,15)
  fire.velocityY = 6
  fire.shapeColor ="blue"
  fireGroup.add(fire)
 })
  drawSprites();
}


this.remove = function() {
  this.removed = true;

  quadTree.removeObject(this);
}