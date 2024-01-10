let slider

function setup() {
  createCanvas (800, 800)
  rectMode(CENTER)
  angleMode(DEGREES)
  textSize(30)
  textAlign(CENTER, CENTER)

  slider = createSlider(0, 200 ,0)  // min, max, default value
  slider.position(20, 20)
}

function element(depth) {
  fill(255)
  circle(0, 0, 20)

  if (depth > 0) {            // RECURSIVE
    push()
    scale(0.9)                        // scale(1.2)
    rotate(slider.value())            // rotate(40)
    shearY(0)                        // shearY(40)
    line(0, 0, 0, 30)                 // line(0, 0, 0, 30)
    translate(0, 30)                  // translate(0, 30)
    element(depth - 1)                // element(depth - 1)
    pop()

    push()
    scale(0.9)                        // scale(1.2)
    rotate(-slider.value())           // rotate(40)
    shearY(0)                        // shearY(40)
    line(0, 0, 0, 30)                 // line(0, 0, 0, 30)
    translate(0, 30)                  // translate(0, 30)
    element(depth - 1)                // element(depth - 1)
    pop()
  }
  
}

function draw() {
  background(20)

  push()
  translate(width / 2, height / 2)
  element(10)
  rotate(180)
  element(10)
  pop()

  stroke(255)
  text(slider.value(), width / 2, 20)
}
