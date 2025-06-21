/*

The Game Project

Week 4

Scrolling Background

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var trees_x;
var treePos_y;
var cameraPosX;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var collectable;
var canyon;
var cloud;
var mountain;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y +10;
    trees_x = [130,420,610,900,1070];
    treePos_y = height/2;
    cameraPosX = 0

    isLeft = false
    isRight = false
    isFalling = false
    isPlummeting = false

    collectable = {x_pos: 265, y_pos: 72, size: 50, isFound: false}
    canyon = {x_pos: 0, width: 4}
    cloud = [0,300,600,900];
    mountain = {x_pos: 130, y_pos: 0, size: 20}
}

function draw()
{

	///////////DRAWING CODE//////////

    //Sky
    background(165,42,42); //Red color


	//Ground
    noStroke();
	fill(0);
	rect(0, floorPos_y, height*2, width - floorPos_y);


    //Position of the camera

    if(isLeft)
{
    cameraPosX -= 1
}
    else if (isRight)
{
    cameraPosX += 1
}

push()                                                                                                      //push is here
translate(-cameraPosX, 0)


        // Canyon

//Back shape (White)
fill(255,255,255);
noStroke();
beginShape();
vertex(200+canyon.x_pos-canyon.width+90,432);
vertex(175+canyon.x_pos-canyon.width+90,462);
vertex(185+canyon.x_pos-canyon.width+90,492);
vertex(180+canyon.x_pos-canyon.width+90,522);
vertex(170+canyon.x_pos-canyon.width+90,552);
vertex(180+canyon.x_pos-canyon.width+90,587);
vertex(310+canyon.x_pos+canyon.width+30,587);
vertex(320+canyon.x_pos+canyon.width+30,587);
vertex(310+canyon.x_pos+canyon.width+30,557);
vertex(330+canyon.x_pos+canyon.width+30,500);
vertex(340+canyon.x_pos+canyon.width+30,432);
vertex(370+canyon.x_pos+canyon.width+30,432);
endShape();

//Front shape (Red)
fill(165,42,42);
noStroke();
beginShape();
vertex(205+canyon.x_pos-canyon.width+100,432);
vertex(185+canyon.x_pos-canyon.width+100,462);
vertex(195+canyon.x_pos-canyon.width+100,492);
vertex(190+canyon.x_pos-canyon.width+100,522);
vertex(180+canyon.x_pos-canyon.width+100,552);
vertex(190+canyon.x_pos-canyon.width+100,587);
vertex(320+canyon.x_pos,587);
vertex(330+canyon.x_pos+canyon.width,587);
vertex(320+canyon.x_pos+canyon.width,557);
vertex(340+canyon.x_pos+canyon.width,500);
vertex(350+canyon.x_pos+canyon.width,432);
endShape();

        //Mountain

noStroke()
fill(0,0,0);

//left mountain
triangle(550+mountain.x_pos-mountain.size,300+mountain.y_pos,500+mountain.x_pos-mountain.size,432+mountain.y_pos,600+mountain.x_pos-mountain.size,432+mountain.y_pos);

//right mountain
triangle(700+mountain.x_pos+mountain.size,335+mountain.y_pos,650+mountain.x_pos+mountain.size,432+mountain.y_pos,750+mountain.x_pos+mountain.size,432+mountain.y_pos);

//middle mountain
triangle(550+mountain.x_pos-mountain.size,432+mountain.y_pos,625+mountain.x_pos,150+mountain.y_pos,700+mountain.x_pos+mountain.size,432+mountain.y_pos);


//middle triangle snow
    fill(255,255,255);
    beginShape();
    vertex(597+mountain.x_pos-(56/150)*mountain.size,256+mountain.y_pos);
    vertex(600+mountain.x_pos-(56/150)*mountain.size,300+mountain.y_pos);
    vertex(615+mountain.x_pos-(56/150)*mountain.size,262+mountain.y_pos);
    vertex(625+mountain.x_pos,300+mountain.y_pos);
    vertex(633+mountain.x_pos+(56/150)*mountain.size,262+mountain.y_pos);
    vertex(650+mountain.x_pos+(56/150)*mountain.size,300+mountain.y_pos);
    vertex(653+mountain.x_pos+(56/150)*mountain.size,256+mountain.y_pos);
    endShape();
    triangle(597+mountain.x_pos-(56/150)*mountain.size,256+mountain.y_pos,625+mountain.x_pos,150+mountain.y_pos,653+mountain.x_pos+(56/150)*mountain.size,256+mountain.y_pos);

//left triangle snow
    fill(255,255,255);
    beginShape();
    vertex(532+mountain.x_pos-mountain.size,350+mountain.y_pos);
    vertex(540+mountain.x_pos-mountain.size,360+mountain.y_pos);
    vertex(545+mountain.x_pos-mountain.size,350+mountain.y_pos);
    vertex(550+mountain.x_pos-mountain.size,360+mountain.y_pos);
    vertex(555+mountain.x_pos-mountain.size,350+mountain.y_pos);
    vertex(560+mountain.x_pos-mountain.size,360+mountain.y_pos);
    vertex(568+mountain.x_pos-mountain.size,350+mountain.y_pos);
    endShape();
    triangle(532+mountain.x_pos-mountain.size,350+mountain.y_pos,550+mountain.x_pos-mountain.size,300+mountain.y_pos,568+mountain.x_pos-mountain.size,350+mountain.y_pos);

//right triangle snow
    fill(255,255,255);
    beginShape();
    vertex(688+mountain.x_pos+mountain.size,360+mountain.y_pos);
    vertex(690+mountain.x_pos+mountain.size,370+mountain.y_pos);
    vertex(695+mountain.x_pos+mountain.size,360+mountain.y_pos);
    vertex(700+mountain.x_pos+mountain.size,370+mountain.y_pos);
    vertex(705+mountain.x_pos+mountain.size,360+mountain.y_pos);
    vertex(710+mountain.x_pos+mountain.size,370+mountain.y_pos);
    vertex(712+mountain.x_pos+mountain.size,360+mountain.y_pos);
    endShape();
    triangle(688+mountain.x_pos+mountain.size,360+mountain.y_pos,700+mountain.x_pos+mountain.size,320+mountain.y_pos,712+mountain.x_pos+mountain.size,360+mountain.y_pos);

        //Tree

    //for loop drawing trees
    for(var i=0; i<trees_x.length; i++)
{
    fill(0,0,0);

    rect(trees_x[i],treePos_y+57,15,87); //trunk
    rect(trees_x[i]-15,treePos_y+99,30,5); //upper branch
    rect(trees_x[i]+14,treePos_y+112,15,5); //lower branch

    fill(255,255,255);

    triangle(trees_x[i]-24,treePos_y+82,trees_x[i]+6,treePos_y+27,trees_x[i]+41,treePos_y+82); //leaf 1
    triangle(trees_x[i]-24,treePos_y+62,trees_x[i]+6,treePos_y+7,trees_x[i]+41,treePos_y+62); //leaf 2
    triangle(trees_x[i]-24,treePos_y+42,trees_x[i]+6,treePos_y-13,trees_x[i]+41,treePos_y+42); //leaf 3

    ellipse(trees_x[i]-18,treePos_y+101,10,5); //small leaf 1
    ellipse(trees_x[i]+32,treePos_y+114,10,5); //small leaf 2
}

    //Collectable item

    if(dist(gameChar_x-1,gameChar_y-35,collectable.x_pos+53,collectable.y_pos+317)<20)  //Make the coin disappear when touched
{
    collectable.isFound = true;
}
    else if(collectable.isFound == false)
{
    //The circle of the coin
    strokeWeight(2);
    stroke(0,0,0);
    fill(255,215,0); 
    ellipse(collectable.x_pos+53,collectable.y_pos+317,collectable.size-25,collectable.size-25);

    //The $ text
    strokeWeight(4);
    stroke(0,0,0);
    fill(255,215,0);
    textSize(collectable.size-35);
    textAlign(CENTER, CENTER);
    text('$',collectable.x_pos+53,collectable.y_pos+319);
}

        //Cloud

    noStroke()

    //for loop drawing clouds
    for(var j=0; j<5 ; j++)
{
    fill(255,255,255);
//center circle
    ellipse(cloud[j]+200,cloud[0]+150,cloud[0]+80,cloud[0]+80);
//left circle
    ellipse(cloud[j]+150-cloud[0],cloud[0]+150,cloud[0]+60,cloud[0]+60);
//left left circle
    ellipse(cloud[j]+110-(2*cloud[0]),cloud[0]+150,cloud[0]+40,cloud[0]+40);
//right circle
    ellipse(cloud[j]+250+cloud[0],cloud[0]+150,cloud[0]+60,cloud[0]+60);
//right right circle
    ellipse(cloud[j]+290+(2*cloud[0]),cloud[0]+150,cloud[0]+40,cloud[0]+40);
}


	   //Game Character

    if(isLeft && isFalling)  //look like falling left
	{
        //Jumping left
//head
    fill(255);
    noStroke();
    ellipse(gameChar_x-4,gameChar_y-56,15,15);
//torso
    fill(255,248,220);
    noStroke();
    rect(gameChar_x-5,gameChar_y-50,8,20);
//left hand
    fill(255);
    noStroke();
    rect(gameChar_x-12,gameChar_y-49,10,5);
//right hand
    fill(255);
    noStroke();
    rect(gameChar_x+3,gameChar_y-49,10,5);
//left leg
    fill(240,248,255);
    noStroke();
    quad(gameChar_x-5,gameChar_y-35,gameChar_x-12,gameChar_y-15,gameChar_x-8,gameChar_y-12,gameChar_x-2,gameChar_y-30);
//right leg
    fill(240,248,255);
    noStroke();
    quad(gameChar_x,gameChar_y-30,gameChar_x+3,gameChar_y-12,gameChar_x+8,gameChar_y-15,gameChar_x+3,gameChar_y-35);

	}
	else if(isRight && isFalling) //look like falling right
	{

        //Jumping right
//head
    fill(255);
    noStroke();
    ellipse(gameChar_x+4,gameChar_y-56,15,15);
//torso
    fill(255,248,220);
    noStroke();
    rect(gameChar_x-3,gameChar_y-50,8,20);
//left hand
    fill(255);
    noStroke();
    rect(gameChar_x-12,gameChar_y-49,10,5);
//right hand
    fill(255);
    noStroke();
    rect(gameChar_x+3,gameChar_y-49,10,5);
//left leg
    fill(240,248,255);
    noStroke();
    quad(gameChar_x-2,gameChar_y-35,gameChar_x-10,gameChar_y-15,gameChar_x-5,gameChar_y-12,gameChar_x,gameChar_y-30);
//right leg
    fill(240,248,255);
    noStroke();
    quad(gameChar_x+3,gameChar_y-35,gameChar_x+10,gameChar_y-15,gameChar_x+6,gameChar_y-12,gameChar_x,gameChar_y-30);

	}
	else if(isLeft) //look like walking left
	{

        //Walking, turned left
//head
    fill(255);
    noStroke();
    ellipse(gameChar_x-4,gameChar_y-56,15,15);
//torso
    fill(255,248,220);
    noStroke();
    rect(gameChar_x-5,gameChar_y-50,8,20);
//left hand
    fill(255);
    noStroke();
    rect(gameChar_x-12,gameChar_y-43,10,5)
//right hand
    fill(255);
    noStroke();
    rect(gameChar_x+3,gameChar_y-50,3,5);
    rect(gameChar_x+5,gameChar_y-50,3,12);
//left leg
    fill(240,248,255);
    noStroke();
    quad(gameChar_x-5,gameChar_y-35,gameChar_x-12,gameChar_y-15,gameChar_x-8,gameChar_y-12,gameChar_x-2,gameChar_y-30);
//right leg
    fill(240,248,255);
    noStroke();
    quad(gameChar_x,gameChar_y-30,gameChar_x+3,gameChar_y-12,gameChar_x+8,gameChar_y-15,gameChar_x+3,gameChar_y-35);

	}
	else if(isRight) //look like walking right
	{

        //Walking, turned right
//head
    fill(255);
    noStroke();
    ellipse(gameChar_x+4,gameChar_y-56,15,15);
//torso
    fill(255,248,220);
    noStroke();
    rect(gameChar_x-3,gameChar_y-50,8,20);
//left hand
    fill(255);
    noStroke();
    rect(gameChar_x-6,gameChar_y-50,3,5);
    rect(gameChar_x-8,gameChar_y-50,3,12);
//right hand
    fill(255);
    noStroke();
    rect(gameChar_x+2,gameChar_y-43,10,5);
//left leg
    fill(240,248,255);
    noStroke();
    quad(gameChar_x-2,gameChar_y-35,gameChar_x-10,gameChar_y-15,gameChar_x-5,gameChar_y-12,gameChar_x,gameChar_y-30);
//right leg
    fill(240,248,255);
    noStroke();
    quad(gameChar_x+3,gameChar_y-35,gameChar_x+10,gameChar_y-15,gameChar_x+6,gameChar_y-12,gameChar_x,gameChar_y-30);
        
	}
	else if(isFalling || isPlummeting) //look like jumping facing foward
	{

        //Jumping facing forwards
//head
    fill(255);
    noStroke();
    ellipse(gameChar_x,gameChar_y -57,15,15);
//torso
    fill(255,248,220);
    noStroke();
    triangle(gameChar_x-10,gameChar_y-50,gameChar_x,gameChar_y-25,gameChar_x+10,gameChar_y-50);
//left hand
    fill(255);
    noStroke();
    rect(gameChar_x-20,gameChar_y-50,15,5);
//right hand
    fill(255);
    noStroke();
    rect(gameChar_x+5,gameChar_y-50,15,5);
//left leg
    fill(240,248,255);
    noStroke();
    rect(gameChar_x-4,gameChar_y-35,3,25);
//right leg
    fill(240,248,255);
    noStroke();
    rect(gameChar_x+1,gameChar_y-35,3,25);

	}
	else //when no moves, standing facing frontwards
	{

        //Standing, facing frontwards
//head
    fill(255);
    noStroke();
    ellipse(gameChar_x,gameChar_y -57,15,15);
//torso
    fill(255,248,220);
    noStroke();
    triangle(gameChar_x-10,gameChar_y-50,gameChar_x,gameChar_y-25,gameChar_x+10,gameChar_y-50);
//left hand
    fill(255);
    noStroke();
    rect(gameChar_x-10,gameChar_y-50,5,20);
//right hand
    fill(255);
    noStroke();
    rect(gameChar_x+5,gameChar_y-50,5,20);
//left leg
    fill(240,248,255);
    noStroke();
    rect(gameChar_x-4,gameChar_y-35,3,25);
//right leg
    fill(240,248,255);
    noStroke();
    rect(gameChar_x+1,gameChar_y-35,3,25);
pop()                                                                                                      //pop is here

	}

    //falling down the canyon

    if((gameChar_x>205+canyon.x_pos-canyon.width+100+5 && gameChar_x<350+canyon.x_pos+canyon.width-5) && gameChar_y >= floorPos_y+10) //if within opening of the canyon
{
    isPlummeting = true
}

    if(isPlummeting == true) //make falling quick
{
    gameChar_y += 5
}

	///////////INTERACTION CODE//////////

        //Movements

    if(isLeft)
{
    gameChar_x -= 1 //turn left
}

    if(isRight)
{
    gameChar_x += 1 //turn rigth
}

    if(gameChar_y < floorPos_y +10) //if not on floor
{
    gameChar_y += 2 //gravity
    isFalling = true
}
    else
{
    isFalling = false
}

}


function keyPressed()
{
	// if statements to control the animation of the character when keys are pressed.

    if(isPlummeting == false)
{
    if(keyCode == 81) //if q is pressed
{
    isLeft = true
}
    else if(keyCode == 68) //if d is pressed
{
    isRight = true
}
    else if(isFalling == false) //prevent double jumps
    
    {if(keyCode == 90)  //jump
    {gameChar_y -= 100}}
}
}

function keyReleased()
{
	// if statements to control the animation of the character when keys are released.

    if(keyCode == 81) //if q is released
{
    isLeft = false
}
    else if(keyCode == 68) //if d is released
{
    isRight = false
}

}
