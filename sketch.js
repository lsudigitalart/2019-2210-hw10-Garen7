const NUMBALLS = 100
const GRAVITY = 1/1000
const SPEEDCAP = 20

let light
let colorSpace
let balls = []

function setup(){
   createCanvas(innerWidth, innerHeight)
   noStroke()
   colorSpace = [random(256), random(256), random(256)]
   light = random(40)
   for(let i = 0; i < NUMBALLS; i++){
      balls.push(new Ball(random(width), random(height)))
   }
}

function draw(){
   background(256, 256, 256, 3)
   for(let ball of balls){
      ball.update()
   }
}


class Ball{
   constructor(x, y){
      this.x = x
      this.y = y
      this.xVel = random(-10, 10)
      this.yVel = random(-10, 10)
      this.color = color(random(colorSpace[0])+light, random(colorSpace[1])+light, random(colorSpace[2])+light)
   }

   update(){
      this.move()

      this.accelerate()

      fill(this.color)
      circle(this.x, this.y, 20)
   }

   move(){
      this.x += this.xVel
      this.y += this.yVel
   }

   accelerate(){
      this.xVel += GRAVITY*(mouseX - this.x)
      this.yVel += GRAVITY*(mouseY - this.y)
      this.speedCap()
   }

   speedCap(){
      this.xVel = constrain(this.xVel, -SPEEDCAP, SPEEDCAP)
      this.yVel = constrain(this.yVel, -SPEEDCAP, SPEEDCAP)
   }
}
