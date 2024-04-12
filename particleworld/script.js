// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 200; // Decide the initial number of particles.
let NUM_OF_BEES = 100;

let particles = [];
let bees = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }

  for (let i = 0; i < NUM_OF_BEES; i++) {
    bees[i] = new Bee(random(width), random(height));
  }
}

function draw() {
  background(202, 236, 211);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.spin();
    p.stop();
    p.update();
    p.display();
  }

  for (let i = 0; i < bees.length; i++) {
    let b = bees[i];
    b.update();
    b.display();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.xSpd = random(-2.3, 0.8);
    this.ySpd = random(-0.5, 3);
    this.dia = 6;
    this.angle = 0;
    this.isSpinning = true;
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.x -= this.xSpd;
    this.y -= this.ySpd;

    if (this.isSpinning) {
      this.angle += random(0, 10);
    }
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);

    rotate(this.angle);

    //flowers
    fill(255, 255, 160); //yellow
    circle(5, 5, this.dia * 1.5);
    fill(130, 255, 255); //cyan
    circle(5, -3, this.dia * 1.5);
    fill(230, 120, 255); //magenta
    circle(5, -3, this.dia * 1.5);
    fill(70, 200, 150); //green
    circle(-2, -6, this.dia * 1.5);
    fill(255, 200, 200); //pink
    circle(-7, 0, this.dia * 1.5);
    fill(200, 200, 255); //blue
    circle(-3, 7, this.dia * 1.5);
    fill(255, 255, 255);
    circle(0, 0, this.dia);

    pop();
  }
  spin() {
    this.isSpinning = true;
    this.angle += random(0, 0.4);
  }
  stop() {
    this.isSpinning = false;
  }
}

class Bee {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.xSpd = random(-10, 3);
    this.ySpd = random(-3, 10);
    this.dia = 6;
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.x -= this.xSpd;
    this.y -= this.ySpd;
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);

    //bee
    fill(171, 240, 255); //wings
    ellipse(30, -5, 5, 8);
    ellipse(10, 5, 5, 8);
    ellipse(30, 5, 5, 8);
    ellipse(10, -5, 5, 8);
    fill(255, 244, 61); //body
    ellipse(20, 0, 15, 20);
    stroke(0);
    strokeWeight(5);
    line(15, -5, 25, -5);
    line(15, 5, 25, 5);

    pop();
  }

}
