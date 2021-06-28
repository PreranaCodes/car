var ball,database;
var position;

var gameState=0;
var form,game;
var playerCount;
var player;
var allPlayers;

var car1,car2,car3,car4;
var cars=[];
var x,y;
y=0;
var car1Img,car2Img,car3Img,car4Img,trackImg;
var space;
var passedFinish=false,f2,f1,obstacles,finishedPlayers=0;

function preload(){
   car1Img=loadImage('images/car1.png');
   car2Img=loadImage('images/car2.png');
   car3Img=loadImage('images/car3.png');
   car4Img=loadImage('images/car4.png');
   trackImg=loadImage('images/track.jpg');   
   f2=  loadImage("images/f1.png")

}

function setup(){
    createCanvas(displayWidth,displayHeight);
    
    database=firebase.database();
    w=random(200,950);
    h=random(-height*4,height-300)
    f1=createSprite(w,h)
    f1.addImage(f2);

    game=new Game();
    game.getState();
    game.start();
    obstacles=createGroup();
    for(i=0;i<5;i++){
        w=random(200,950);
        h=random(-height*4,height-300)
        f1=createSprite(w,h)
        f1.addImage(f2);
        obstacles.add(f1)
    
    }
    

}

function draw(){

  if(playerCount==4){
      game.update(1);
  }
  if(gameState===1){
      clear();
      game.play();
      
  }
  //if(gameState===2){
    //game.end();
  // }
  if(finishedPlayers==4)
  {
      game.update(2);
  }
    
if(finishedPlayers==4 && gameState==2)
{
    game.displayRanks();
}
}



