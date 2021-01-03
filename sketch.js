var car, wall;

var speed, weight;

var deformation;

function setup() { 
  
  a = createCanvas (1600, 400);

  speed = random(55,90); 
  
  weight = random(420, 1500);
  
  car = createSprite(50, 200, 50,50);

  car.velocityX = speed;

  car.shapeColor = 'white';

  wall = createSprite(1500,200, 60, height / 2);
  
  wall.shapeColor = color(80,80,80);

}

function draw() {

  background(0);

  a.mousePressed(b); 
  
  if(car.x > wall.x){
    car.x = 10 + wall.x;
    car.shapeColor = 'RED';
  }
  
  if(wall.x - car.x < (car.width + wall.width) / 2){

    car.velocityX = 0;
    

    deformation = 0.5*weight*speed*speed/22509;

    if (deformation > 180){

      car.shapeColor = color (255,0,0);

    
    }

  else if (deformation < 180 && deformation > 100){

      car.shapeColor = color(230, 230,0);

      }
    
  else if(deformation < 100){
    
      car.shapeColor = color(0,255,0);


       }
       
    else {
      
      car.shapeColor = 'white';
      
      }
    
   }
     
  drawSprites();
  
}

function b(){
  
      //car = createSprite(50, 200, 50,50);
      
      //deformation = 0.5*weight*speed*speed/22509;
  
      //car.velocityX = speed;
  
      //car.shapeColor='white';
  
  createA('https://editor.p5js.org/harshaedupuganti70/present/iVBB0nyoM','replay');
  
  let a = createP('');
  
}