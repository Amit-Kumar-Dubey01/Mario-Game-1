function preload(){
    bgImage = loadImage("images/bgnew.jpg");
    mario_running = loadAnimation("images/mar1.png", "images/mar7.png");
}

function setup() {
createCanvas(1000, 600);
 
   bg = createSprite(500, 300);
   bg.addImage(bgImage);
   bg.scale = 0.4;
   mario = createSprite(200, 435);
   mario.addAnimation("running", mario_running);
   mario.scale = 0.3;
   ground = createSprite(200, 530, 200, 10);
   ground.visible = false;
    mario.debug = true;
    //mario.setCollider("rectangle", 0, 0, 100, 200);
}

function draw() {
 
    if(keyDown("space")){
        mario.velocityY = -10;     
    }
    mario.velocityY =  mario.velocityY + 0.5;
    mario.collide(ground);

    
 drawSprites();
}
