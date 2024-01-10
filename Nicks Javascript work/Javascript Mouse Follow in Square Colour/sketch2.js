function setup() {
    createCanvas(600, 600)
}


function draw() {
    background(0)
    noStroke()
    
    let mx = floor(map(mouseX, 20, width - 20, 0, 49))
    let my = floor(map(mouseY, 20, height -20, 0, 49))


    for (let y of math.range(0, 50). toArray()) {
        for (let x of math.range(0, 50). toArray()) {
            let xPixel = map(x, 0, 49, 20, width - 20)
            let yPixel = map(y, 0, 49, 20, width - 20)
        
            const BINDINGS = {x: x, y: y, f: frameCount, mx: mx, my: my}
            const EQUATION_1 = "x > mx"
            const EQUATION_2 = "x == f % 49"

            if (math.evaluate(EQUATION_1, BINDINGS)) {
                fill(50, 100, 255)   
            } else if (math.evaluate(EQUATION_2, BINDINGS)){
                fill(255, 0, 0)
            } else { 
                fill(255)
            }

            circle(xPixel, yPixel, 10)
        }  
          
      
    }
}
  