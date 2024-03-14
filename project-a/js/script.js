console.log("test");

let x, y;
let xSpeed, ySpeed;
let dia;
let angle = 0;

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container")

    background(0);

    x = 0;
    y = 0;
    dia = 20;

    xSpeed = random(-7, 7);
    ySpeed = random(-7, 7);
}

function draw() {
    background(0, 20);

    x += xSpeed;
    y += ySpeed;

    if (x < -height / 2 || x > height / 2) {
        xSpeed = xSpeed * -1;
    }
    if (y < -height / 2 || y > height / 2) {
        ySpeed *= -1;
    }

    push();
    translate(width / 2, height / 2);
    rotate(angle);

    if (mouseIsPressed) {
        angle += 0.03;
    }

    let sinValue = map(sin(frameCount * 0.01), -1, 1, 0.5, 1.5);
    scale(sinValue);
    drawCreature(x, y);
    pop();

    //background + stars
    noStroke();
    fill(255, 255, 255);
    star(random(width), random(height), random(5, 30));
    star(random(width), random(height), random(5, 15));
}

function star(x, y, size) {
    // parameters
    ellipse(x, y, size - 2, size / 10);
    ellipse(x, y, size / 10, size - 2);
}

function drawCreature(x, y) {
    noStroke();
    if (mouseY < 200) {
        dia = 70;
        fill(255, 100, 100); //angry face
        circle(x, y, dia);
        strokeWeight(2);
        circle(x - 10, y, 10);
        circle(x + 10, y, 10);
        fill(255, 255, 200);
        circle(x - 10, y, 10);
        circle(x + 10, y, 10);
        fill(0);
        circle(x - 10, y, 2);
        circle(x + 10, y, 2);
        strokeWeight(3);
        line(x, y, x + 10, y + 10);
        noFill();
        stroke(0, 0, 0, 300); // mouth
        strokeWeight(3);
        arc(x, y + 20, 15, 15, PI * 1.15, PI * 1.85);
    } else if (mouseY >= 200 && mouseY < 350) {
        dia = 70;
        fill(255, 250, 160); //smiley face
        circle(x, y, dia);
        strokeWeight(2);
        circle(x - 10, y, 10);
        circle(x + 10, y, 10);
        fill(240, 240, 240);
        circle(x - 10, y, 10);
        circle(x + 10, y, 10);
        fill(0);
        circle(x - 10, y, 2);
        circle(x + 10, y, 2);
        noFill();
        stroke(255, 130, 171, 300);
        strokeWeight(3);
        arc(x, y + 10, 10, 10, PI * 0.25, PI * 0.75);
    } else if (mouseY <= 500) {
        dia = 70;
        fill(50, 150, 255); //sad face
        circle(x, y, dia);
        strokeWeight(2);
        circle(x - 10, y, 10);
        circle(x + 10, y, 10);
        fill(255, 200, 245);
        circle(x - 10, y, 10);
        circle(x + 10, y, 10);
        fill(0);
        circle(x - 10, y, 2);
        circle(x + 10, y, 2);
        noFill();
        stroke(255, 130, 171, 300);
        strokeWeight(3);
        arc(x, y + 20, 15, 15, PI * 1.15, PI * 1.85);
    }
}

