
/* what i want to happen:
-- draw background
-- draw all finished stars in stars array
-- draw a new beginning star
-- draw line from beginning star loc to finished star loc
-- add finished star loc to stars array
-- draw background
-- draw all finished stars in stars array
*/
var stars = []
var starNum = 0
var directionX = 0
var directionY = 0
var bell1
var bell2
var bell3
var bells = [bell1, bell2, bell3]
var bell

function preload(){
	bell1 = loadSound("assets/bell1.mp3")
	bell2 = loadSound("assets/bell2.mp3")
	bell3 = loadSound("assets/bell3.mp3")
}
function Star(beginX, beginY, endX, endY){
	this.beginX = beginX
	this.beginY = beginY
	this.starSize = 3
	this.endX = endX
	this.endY = endY
}

Star.prototype.update = function(){
	fill(255)
	ellipse(this.beginX, this.beginY, this.starSize, this.starSize)
}

Star.prototype.glow = function(){
	fill(255,255,255,40)
	noStroke()
	ellipse(this.beginX, this.beginY, (this.starSize*5), (this.starSize*5))
}

Star.prototype.move = function(){
	this.endX = this.endX + directionX
	this.endY = this.endY + directionY
	stroke(255)
	strokeWeight(1)
	line(this.beginX, this.beginY, this.endX, this.endY) 
	stroke(255,255,255,40)
	strokeWeight(3)
	line(this.beginX, this.beginY, this.endX, this.endY)
}

Star.prototype.finish = function(){
	this.beginX = this.endX
	this.beginY = this.endY
	stars[starNum] = new Star (this.beginX, this.beginY, this.starSize, this.starSize)
	background(0)	
	for (i=0; i<stars.length; i++){
		stars[i].update()
	} 
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	background(0)
		
	function doStar(){
		bell = random(bells)
		directionX = random(-50,50)
		directionY = random(-50,50)
		randomX=(random(width))
		randomY=(random(height))
		stars[starNum] = new Star(randomX, randomY, randomX, randomY)
		stars[starNum].update()
		stars[starNum].glow()
		setTimeout(stars[starNum].move.bind(stars[starNum]), 1000)
		setTimeout(stars[starNum].move.bind(stars[starNum]), 1050)
		setTimeout(stars[starNum].move.bind(stars[starNum]), 1100)
		setTimeout(stars[starNum].move.bind(stars[starNum]), 1150)
		setTimeout(stars[starNum].move.bind(stars[starNum]), 1200)
		setTimeout(stars[starNum].move.bind(stars[starNum]), 1250)
		setTimeout(stars[starNum].move.bind(stars[starNum]), 1300)
		setTimeout(stars[starNum].move.bind(stars[starNum]), 1350)
		setTimeout(stars[starNum].move.bind(stars[starNum]), 1400)
		setTimeout(stars[starNum].finish.bind(stars[starNum]), 1450)
		setTimeout(bell.play,1400)
		starNum = starNum + 1
	}

	setInterval(doStar, 1800)

}


