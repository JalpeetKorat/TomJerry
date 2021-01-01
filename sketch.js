var garden,gardenImage;
var tom,tomImage,tomAnimation,tomCollide;
var jerry,jerryImage,jerryAnimation,jerryCollide;

function preload() {
    //load the images here
    gardenImage = loadImage("garden.png");

    tomImage = loadImage("tomOne.png");

    tomAnimation = loadAnimation("tomTwo.png","tomThree.png");

    tomCollide = loadImage("tomFour.png");
    
    jerryImage = loadImage("jerryOne.png");

    jerryAnimation = loadAnimation("jerryTwo.png", "jerryThree.png");

    jerryCollide = loadImage("jerryFour.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage(gardenImage);

    tom = createSprite(900,700);
    tom.addImage(tomImage);

    jerry = createSprite(200,300);
    jerry.addImage(jerryImage);
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide

   if (tom.x - jerry.x < tom.width - mouse.width/2) {
      tom.velocityX = 0; 
      tom.addImage("collideTom",tomCollide);
      tom.changeImage("collideTom");

      jerry.addImage("collideJerry",jerryCollide);
      jerry.changeImage("collideJerry");
   }
   else{
       tom.velocityX = -5;
       tom.addAnimation("runningTom", tomAnimation);
       tom.changeAnimation("runningTom");

       jerry.addAnimation("dancingJerry", jerryAnimation);
       jerry.changeAnimation("dancingJerry"); 
   } 

    keyPressed();

    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("runningTom",tomAnimation);
      tom.changeAnimation("runningTom");

      jerry.addAnimation("dancingJerry",jerryAnimation);
      jerry.changeAnimation("dancingJerry");
  }

}
