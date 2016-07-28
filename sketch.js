var stars = []
var count = 0
var starXCoord = 0
var starYCoord = 0
var directionchoice = [-5, 5]
var direction = 0
var lineStartX = 0
var lineStartY = 0
var shoot 

function starLine(lineXA, lineYA, lineXB, lineYB){
	this.x1 = lineXA
	this.y1 = lineYA
	this.x2 = lineXB
	this.y2 = lineYB 
}

starLine.prototype.create = function(){
	strokeWeight(1)
	stroke(255,255,255,50)
	line(this.x1, this.y1, this.x2, this.y2)
}

function setup(){
	createCanvas(500,500)
	background(0)
}

function Star(starX, starY, starSize){
	this.x = starX
	this.y = starY
	this.size = starSize 
}

Star.prototype.create = function(){
	fill(255)
	noStroke()
	ellipse(this.x, this.y, this.size, this.size)
}


function makeStar(){
	starXCoord = random(width)
	starYCoord = random(height)
	lineStartX = starXCoord
	lineStartY = starYCoord
	stars[count] = new Star(starXCoord, starYCoord, 2)
	stars[count].create() 
	direction = (random(directionchoice))
	shoot = new starLine(lineStartX, lineStartY, starXCoord, starYCoord)
	shoot.create();
	fill(255,255,255,30)
	noStroke()
	ellipse(starXCoord, starYCoord, 15,15)
}
function tailOne(){
	fill(255, 255, 255, 45)
	noStroke()
	starXCoord = starXCoord + direction 
	starYCoord = starYCoord - 5
	ellipse(starXCoord, starYCoord, 12, 12)
	shoot = new starLine(lineStartX, lineStartY, starXCoord, starYCoord)
	shoot.create();
}
function tailOneA(){
	fill(255, 255, 255, 50)
	noStroke()
	starXCoord = starXCoord + (direction/2) 
	starYCoord = starYCoord - 2.5
	ellipse(starXCoord, starYCoord, 10, 10)
	shoot = new starLine(lineStartX, lineStartY, starXCoord, starYCoord)
	shoot.create();
}

function tailTwo(){
    fill(255, 255, 255, 55)
    noStroke()
	starXCoord = starXCoord + direction
	starYCoord = starYCoord - 5
	ellipse(starXCoord, starYCoord, 8, 8)
	shoot = new starLine(lineStartX, lineStartY, starXCoord, starYCoord)
	shoot.create();
}

function tailTwoA(){
	fill(255,255,255,57)
	noStroke()
	starXCoord = starXCoord + (direction/2)
	starYCoord = starYCoord - 2.5
	ellipse(starXCoord, starYCoord, 6, 6)
	shoot = new starLine(lineStartX, lineStartY, starXCoord, starYCoord)
	shoot.create();
}

function tailThree(){
	fill(255, 255, 255, 60)
	noStroke()
	starXCoord = starXCoord + direction
	starYCoord = starYCoord - 5
	ellipse(starXCoord, starYCoord, 5, 5)
	shoot = new starLine(lineStartX, lineStartY, starXCoord, starYCoord)
	shoot.create();
}

function tailThreeA(){
	fill(255,255,255,64)
	noStroke()
	starXCoord = starXCoord + (direction/2)
	starYCoord = starYCoord - 2.5
	ellipse(starXCoord,starYCoord, 4, 4)
	shoot = new starLine(lineStartX, lineStartY, starXCoord, starYCoord)
	shoot.create();
}

function tailFour(){
	fill(255, 255, 255, 68)
	noStroke()
	starXCoord = starXCoord + direction
	starYCoord = starYCoord - 5
	ellipse(starXCoord, starYCoord, 3.5, 3.5)
	shoot = new starLine(lineStartX, lineStartY, starXCoord, starYCoord)
	shoot.create();
}

function tailFourA(){
	fill(255,255,255,72)
	noStroke()
	starXCoord = starXCoord + (direction/2)
	starYCoord = starYCoord - 2.5
	ellipse(starXCoord,starYCoord, 3,3)
	shoot = new starLine(lineStartX, lineStartY, starXCoord, starYCoord)
	shoot.create();
}

function tailFive(){
	fill(255, 255, 255, 75)
	noStroke()
	starXCoord = starXCoord + direction
	starYCoord = starYCoord - 5
	ellipse(starXCoord, starYCoord, 2, 2)
	shoot = new starLine(lineStartX, lineStartY, starXCoord, starYCoord)
	shoot.create();
}
function eraseTail(){
	stars[count] = new Star(starXCoord, starYCoord, 3)
	background(0)	
	for (i = 0; i < stars.length; i++){
		stars[i].create()
	} 
	count = count + 1
}

function wholeStar(){
	makeStar()
	setTimeout(tailOne, 500)
	setTimeout(tailOneA, 750)
	setTimeout(tailTwo, 1000)
	setTimeout(tailTwoA, 1250)
	setTimeout(tailThree, 1500)
	setTimeout(tailThreeA, 1750)
	setTimeout(tailFour, 2000)
	setTimeout(tailFourA, 2250)
	setTimeout(tailFive, 2500)
	setTimeout(eraseTail, 2750)
}

setInterval(wholeStar, 3000)
