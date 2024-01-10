function setup() {
  createCanvas (700, 700)
  rectMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
  background(220)

  fill(255)
  push()                  // when pop is used it reverts back to this push
  translate(width / 2, height / 2)
  rotate(frameCount * 2)  // before thge translation means the shape rotates from origin
                          // after translate means the shape rotates at its fixed point
  scale(0.8)              // affects size of shape
  shearX(40)              // shearX and,
  shearY(30)              // shearY pull the shape at a certain axis to a degree
            

  rect(0, 0, 200, 100)
  circle(0, 100, 50, 50)

  fill(0)
  circle(50, 100, 10, 10)
  pop()                   // when pop is used it undos all commands implemented
  

}
