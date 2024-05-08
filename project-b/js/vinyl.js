let record;
let vinyl1;
let vinyl2;
let vinyl3;
let gg;
let perfect;
let photograph;

function preload() {
    // preload() runs once
    gg = loadSound("sheerio/gg.mp3");
    perfect = loadSound("sheerio/perfect.mp3");
    photograph = loadSound("sheerio/photograph.mp3");
}


function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("canvasContainer");
    record = new Disc(200, 350);
    vinyl1 = new Vinyl(600, 150);
    vinyl2 = new Vinyl(500, 300);
    vinyl3 = new Vinyl(600, 450);
}

function draw() {
    background(232, 246, 243);

    fill(222, 184, 135); //record player base
    stroke(0);
    strokeWeight(3);
    rect(70, 200, 300, 300, 25);
    fill(0);
    rect(320, 225, 20, 30); //side decor
    rect(325, 250, 10, 200);
    circle(330, 280, 30);
    circle(100, 470, 20);

    record.spin();
    record.stop();
    record.update();
    record.display();
    vinyl1.display();
    vinyl2.display();
    vinyl3.display();

    //text
    strokeWeight(0);
    fill(0);
    textSize(20);
    text("CLICK ON THE PINK BUTTONS BELOW TO PLAY EACH VINYL!", 100, 45);
    strokeWeight(2);
    stroke(51);
    fill(255);
    textSize(15);
    textFont('Verdana');
    text("Perfect", 575, 200);
    text("Galway Girl", 457, 345);
    text("Photograph", 558, 500);


}

function playVinyl1() {
    if (perfect.isPlaying() == false) {
        gg.stop();
        photograph.stop();
        perfect.play();
    } else {
        perfect.pause();
    }
}

function playVinyl2() {
    if (gg.isPlaying() == false) {
        perfect.stop();
        photograph.stop();
        gg.play();
    } else {
        gg.pause();
    }
}

function playVinyl3() {
    if (photograph.isPlaying() == false) {
        gg.stop()
        perfect.stop();
        photograph.play();
    } else {
        photograph.pause();
    }
}

class Disc {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.angle = 0;
        this.isSpinning = true;
    }

    update() {
        if (this.isSpinning) {
            this.angle += 1;
        }
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);

        translate(-this.x, -this.y);

        fill(0);
        circle(200, 350, 200); //disc
        fill(255, 0, 0); // center
        noStroke();
        circle(200, 350, 70);
        fill(220);
        circle(200, 350, 20);
        stroke(255);
        noFill();
        strokeWeight(1);

        arc(200, 350, 130, 130, PI * 1.25, PI * 1.65);
        arc(200, 350, 130, 130, PI * 0.75, PI);
        arc(200, 350, 130, 130, PI * 1.9, PI * 0.2);

        pop();
    }

    spin() {
        this.isSpinning = true;
        this.angle += 0.1;
    }
    stop() {
        this.isSpinning = false;
    }
}

class Vinyl {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }

    display() {
        push();
        translate(this.x, this.y);
        fill(0); // vinyls
        circle(0, 0, 150);
        fill(220);
        circle(0, 0, 40);
        pop();
    }
}