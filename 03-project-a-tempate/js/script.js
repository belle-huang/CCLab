console.log("test");

let t = 0; // time
let angle = 0;
let xSpeed, ySpeed;
let x, y;
let dia;

function setup() {
    createCanvas(800, 500);
    canvas.parent("p5-canvas-container");

    xSpeed = random(-5, 5);
    ySpeed = random(-5, 5);
}

function draw() {
    background(0, 10);
    noStroke();

    let x, y, dia;
    t = t + 0.1;

    let amp = 50;
    let sinValue = sin(t) * amp;
    let cosValue = cos(t) * amp;

    x += xSpeed;
    y += ySpeed;

    if (x < 0 || x > width) {
        xSpeed = xSpeed * -1;
    }
    if (y < 0 || y > height) {
        ySpeed *= -1;
    }

    //subject
    x = random(0, 500) + cosValue / 2;
    y = random(0, 800) + sinValue / 2;
    dia = 50;
    fill(255, 255, 0); //head
    circle(x, y, dia);
    strokeWeight(2);
    circle(x - 10, y, 10);
    circle(x + 10, y, 10);
    fill(100, 255, 200);
    circle(x - 10, y, 5);
    circle(x + 10, y, 5);
    fill(0);
    circle(x - 10, y, 2);
    circle(x + 10, y, 2);

    if (mouseY < 200) {
        fill(250, 100, 100);
        ellipse(x, y + 15, 5, 5);
    } else if (mouseY >= 200 && mouseY < 350) {
        noFill();
        stroke(255, 130, 171, 300);
        strokeWeight(3);
        arc(x, y + 10, 10, 10, PI * 0.25, PI * 0.75);
    } else if (mouseY <= 500) {
        noFill();
        stroke(255, 130, 171, 300);
        strokeWeight(3);
        arc(x, y + 13, 10, 10, PI * 1.15, PI * 1.85);
    }

    noStroke();

    fill(255, 255, 255);
    star(random(width), random(height), random(5, 30));


    function star(x, y, size) {
        // parameters
        ellipse(x, y, size - 2, size / 10);
        ellipse(x, y, size / 10, size - 2);
    }
