var car,wall,weight,speed,thickness;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  car=createSprite(50,200,50,50)
  car.velocityX=speed;
  car.shapeColor="blue" 
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="purple"

}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
     if(deformation>180)
      {
        car.shapeColor=color(255,0,0);
     }
      if(deformation<180 && deformation>100)
      { 
        car.shapeColor=color(230,230,0); 
      }
       if(deformation<100)
        { 
          car.shapeColor=color(0,255,0); 
        }
         }
         if(hascollided(bullet,wall))
          { 
            bullet.velocityX=0;
             var damage=0.5*weight*speed*speed/(thickness*thickness*thickness); 
             if(damage>10)
              {
                 wall.shapeColor=color(255,0,0);
             } 
             if(damage<10) 
             {
                wall.shapeColor=color(0,255,0);
               } 
              }
   drawSprites();
}
function hasCollided(b1,w1)
{
bulletRightEdge=p1.x+bullet.width
wallLeftEdge=w1.x
if(bulletRightEdge>=wallLeftEdge) {
   return true; 
  } 
  return false;
}
