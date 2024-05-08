let isStroked = -1;
let xArray = [260, 300, 345, 387, 425, 460];
let yArray = [530, 530, 530, 530, 530, 530];

// music
let guitar;

function preload() {
    guitar_e1 = loadSound('assets/e1.mp3');
    guitar_a = loadSound('assets/a.mp3');
    guitar_d = loadSound('assets/d.mp3');
    guitar_g = loadSound('assets/g.mp3');
    guitar_b = loadSound('assets/b.mp3');
    guitar_e2 = loadSound('assets/e2.mp3');

}

function setup() {
    let canvas = createCanvas(700, 600);
    canvas.parent("canvasContainer");
    x = 0;
    y = 0;
}

function draw() {
    background(189, 134, 51);

    //guitar chord sound 
    if (mouseIsPressed) {
        fill(242, 237, 233);
    }

    //guitar hole
    fill('black');
    noStroke();
    ellipse(350, 270, 250, 250);

    //rings around guitar whole
    noFill();
    strokeWeight(4);
    stroke(245, 236, 225);
    ellipse(350, 270, 280, 280);
    noFill();
    strokeWeight(6);
    stroke(245, 236, 225);
    ellipse(350, 270, 310, 310);

    //guitar bridge
    fill(59, 35, 6);
    strokeWeight(4);
    stroke(46, 28, 6);
    rect(220, 510, 280, 40); {
    }

    //Points on bridge
    fill(242, 237, 230);
    strokeWeight(2);
    stroke(156, 152, 148);
    circle(260, 530, 12);
    circle(300, 530, 12);
    circle(345, 530, 12);
    circle(387, 530, 12);
    circle(425, 530, 12);
    circle(460, 530, 12);

    //strings
    for (let i = 0; i < xArray.length; i++) {

        let strength = 0;
        if (i == isStroked) {
            // this line is triggered
            stroke("white");
            strength = 50;
        } else {
            stroke("gray");
        }
        //line(xArray[i], yArray[i], xArray[i], 0);
        //curve(cx1, cy1, x1, y1, x2, y2, cx2, cy2); 
        noFill();
        curve(xArray[i] + random(-1, 1) * strength, yArray[i],
            xArray[i], yArray[i],
            xArray[i], 0,
            xArray[i] + random(-1, 1) * strength, 0
        );
    }
}



function mouseDragged() {
    if (mouseX > 250 && mouseX < 261 && mouseY < 530) { //e1
        guitar_e1.play();
        isStroked = 0;
    }
    if (mouseX > 290 && mouseX < 300 && mouseY < 530) { //a
        guitar_a.play();
        isStroked = 1;
    }
    if (mouseX > 340 && mouseX < 345 && mouseY < 530) { //d
        guitar_d.play();
        isStroked = 2;
    }
    if (mouseX > 380 && mouseX < 387 && mouseY < 530) { //g
        guitar_g.play();
        isStroked = 3;
    }
    if (mouseX < 430 && mouseX > 425 && mouseY < 530) { //b
        guitar_b.play();
        isStroked = 4;
    }
    if (mouseX < 470 && mouseX > 460 && mouseY < 530) { //e
        guitar_e2.play();
        isStroked = 5;
    }

}