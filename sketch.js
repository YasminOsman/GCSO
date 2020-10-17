

var car, car1, car2, car3;
var wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 600);


	speed=random(55,90)
	speed1=random(55,90)
	speed2=random(55,90)
	speed3=random(55,90)
	weight=random(400,1500)
	weight1=random(400,1500)
	weight2=random(400,1500)
	weight3=random(400,1500)


	car=createSprite(50, 200, 50,50);
	car1=createSprite(50, 300, 50,50);
	car2=createSprite(50, 400, 50,50);
	car3=createSprite(50, 500, 50,50);

	car.velocityX = speed;
	car1.velocityX = speed1;
	car2.velocityX = speed2;
	car3.velocityX = speed3;

	car.shapeColor=color("#e6739f");
	car1.shapeColor=color("#cc0e74");
	car2.shapeColor=color("#790c5a");
	car3.shapeColor=color(0);


  
  	wall=createSprite(1500,300, 60, height/1.2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background("#F1D4D4");

  if(isTouching(wall,car)) {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
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

  if(isTouching(wall,car1)) {
	car1.velocityX=0;
	var deformation1=0.5 * weight1 * speed1* speed1/22509;
  if(deformation1>180)
  {
	  car1.shapeColor=color(255,0,0);
  }

  if(deformation1<180 && deformation1>100)
  {
	  car1.shapeColor=color(230,230,0);
  }

  if(deformation1<100)
  {
	  car1.shapeColor=color(0,255,0);
  }

  if(isTouching(wall,car2)) {
	car2.velocityX=0;
	var deformation2=0.5 * weight2 * speed2* speed2/22509;
  if(deformation2>180)
  {
	  car2.shapeColor=color(255,0,0);
  }

  if(deformation2<180 && deformation2>100)
  {
	  car2.shapeColor=color(230,230,0);
  }

  if(deformation2<100)
  {
	  car2.shapeColor=color(0,255,0);
  }

  if(isTouching(wall,car3)) {
	car3.velocityX=0;
	var deformation3=0.5 * weight3 * speed3* speed3/22509;
  if(deformation3>180)
  {
	  car3.shapeColor=color(255,0,0);
  }

  if(deformation3<180 && deformation3>100)
  {
	  car3.shapeColor=color(230,230,0);
  }

  if(deformation3<100)
  {
	  car3.shapeColor=color(0,255,0);
  }
}  
}
}
  
  drawSprites();
 
}


