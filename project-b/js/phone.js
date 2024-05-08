let dropAreaX = 175;
let dropAreaY = 225;
let soy;
let tat;
let tol;

let beingDragged = "";

function preload() {
    soy = loadSound("sheerio/soy.mp3");
    tat = loadSound("sheerio/tat.mp3");
    tol = loadSound("sheerio/tol.mp3");
}

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("canvasContainer");

    buttonA = new RectButtonA(450, 150, 200, 200, 25);
    buttonB = new RectButtonB(670, 300, 200, 200, 25);
    buttonC = new RectButtonC(450, 450, 200, 200, 25);
}

function draw() {
    background(245, 236, 196);

    fill(0); //phone
    stroke(0);
    strokeWeight(3);
    rect(50, 100, 250, 400, 25);
    fill(255);
    rect(64, 112, 225, 375, 25);
    fill(220);
    rect(75, 125, 200, 200, 25);

    fill(0); // lines and buttons
    rect(70, 370, 210, 7, 10);
    rect(169, 400, 5, 15); //pause
    rect(179, 400, 5, 15);
    triangle(140, 407, 150, 412, 150, 402);
    triangle(210, 407, 200, 412, 200, 402);
    rect(110, 437, 165, 5, 10); //volume
    rect(82, 435, 10, 10);
    triangle(85, 440, 100, 430, 100, 450);

    buttonA.checkMouse();
    buttonA.checkDrop(dropAreaX, dropAreaY);
    buttonA.display();

    buttonB.checkMouse();
    buttonB.checkDrop(dropAreaX, dropAreaY);
    buttonB.display();

    buttonC.checkMouse();
    buttonC.checkDrop(dropAreaX, dropAreaY);
    buttonC.display();
}

function mousePressed() {
    let resultA = buttonA.checkClick();
    if (resultA == true) {
        beingDragged = "A"
        return;
    }
    let resultB = buttonB.checkClick();
    if (resultB == true) {
        beingDragged = "B"
        return;
    }
    let resultC = buttonC.checkClick();
    if (resultC == true) {
        beingDragged = "C"
        return;
    }
}

function mouseDragged() {
    if (beingDragged == "A") {
        buttonA.drag();
    }
    if (beingDragged == "B") {
        buttonB.drag();
    }
    if (beingDragged == "C") {
        buttonC.drag();
    }


}
function mouseReleased() {
    beingDragged = "";
}

class RectButtonA {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        // color
        this.r = 255;
        this.g = 255;
        this.b = 255;
    }
    checkMouse() {
        if (
            mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2
        ) {
            // mouse is in the area
            this.r = 255;
            this.g = 255;
            this.b = 255;
        } else {
            // mouse is out of the area
            this.r = 0;
            this.g = 242;
            this.b = 255;
        }
    }
    checkClick() {
        if (
            mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2
        ) {
            if (mouseIsPressed) {
                this.r = 255;
                this.b = 255;
                this.g = 255;
                return true;
            }
        }
        return false;
    }
    drag() {
        this.x = mouseX;
        this.y = mouseY;
    }
    checkDrop(targetX, targetY) {
        let distance = dist(this.x, this.y, targetX, targetY);
        console.log(distance);
        if (distance < 3) {
            if (soy.isPlaying() == false) {
                soy.play();
            }
        } else {
            soy.pause();
        }
    }
    display() {
        push(); // for styling
        translate(this.x, this.y);
        stroke(0);
        strokeWeight(3);
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h, this.c);
        stroke(0);
        strokeWeight(25);
        line(-70, 0, 75, 0); //divide
        circle(0, 50, 15);
        circle(0, -50, 15);
        pop();
    }
}

class RectButtonB {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        // color
        this.r = 255;
        this.g = 255;
        this.b = 255;
    }
    checkMouse() {
        if (
            mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2
        ) {
            // mouse is in the area
            this.r = 255;
            this.g = 255;
            this.b = 255;
        } else {
            // mouse is out of the area
            this.r = 73;
            this.g = 197;
            this.b = 0;
        }
    }
    checkClick() {
        if (
            mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2
        ) {
            if (mouseIsPressed) {
                this.r = 255;
                this.b = 255;
                this.g = 255;
                return true;
            }
        }
        return false;
    }
    drag() {
        this.x = mouseX;
        this.y = mouseY;
    }

    checkDrop(targetX, targetY) {
        let distance = dist(this.x, this.y, targetX, targetY);
        console.log(distance);
        if (distance < 3) {
            if (tol.isPlaying() == false) {
                tol.play();
            }
        } else {
            tol.pause();
        }
    }

    display() {
        push(); // for styling
        translate(this.x, this.y);
        stroke(0);
        strokeWeight(3);
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h, this.c);
        stroke(0); //album symbols
        strokeWeight(25); // multiply
        line(-80, -70, 80, 70);
        line(80, -70, -80, 70);
        pop();
    }
}


class RectButtonC {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        // color
        this.r = 255;
        this.g = 255;
        this.b = 255;
    }
    checkMouse() {
        if (
            mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2
        ) {
            // mouse is in the area
            this.r = 255;
            this.g = 255;
            this.b = 255;
        } else {
            // mouse is out of the area
            this.r = 255;
            this.g = 156;
            this.b = 0;
        }
    }

    checkClick() {
        if (
            mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2
        ) {
            if (mouseIsPressed) {
                this.r = 255;
                this.b = 255;
                this.g = 255;
                return true;
            }
        }
        return false;
    }
    drag() {
        this.x = mouseX;
        this.y = mouseY;
    }

    checkDrop(targetX, targetY) {
        let distance = dist(this.x, this.y, targetX, targetY);
        console.log(distance);
        if (distance < 3) {
            if (tat.isPlaying() == false) {
                tat.play();
            }
        } else {
            tat.pause();
        }
    }

    display() {
        push(); // for styling
        translate(this.x, this.y);
        stroke(0);
        strokeWeight(3);
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h, this.c);
        stroke(0);
        strokeWeight(25);
        line(-80, 0, 80, 0); //plus
        line(0, 80, 0, -80);
        pop();
    }
}

