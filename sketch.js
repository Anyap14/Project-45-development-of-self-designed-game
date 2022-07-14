var aircraft, aircraftImg;
var ufo, ufoImg;
var bgImg, bg1;


function preload(){
  
  aircraftImg = loadImage("assets/aircraft.png");
  ufoImg = loadImage("assets/ufo.png");
  bgImg = loadImage("assets/bg.jpeg");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg1 = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg1.addImage(bgImg)
bg1.scale = 2

//creating the aircraft sprite
aircraft = createSprite(displayWidth-1230, displayHeight-540, 50, 50);
aircraft.addImage(aircraftImg)
aircraft.scale = 0.7
aircraft.debug = true
aircraft.setCollider("rectangle",0,0,300,300)

   //creating the ufo sprite
   ufo=createSprite(displayWidth/2+250, displayHeight/2-80, 20, 20)
   ufo.addImage(ufoImg)
   ufo.scale=0.4
 
  
}



function draw() { 

  //moving the aircraft up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  aircraft.y = aircraft.y-20
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 aircraft.y = aircraft.y+20
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  aircraft.x = aircraft.x-20
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 aircraft.x = aircraft.x+20
}

drawSprites();

}
