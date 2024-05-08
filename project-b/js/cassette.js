let ec;
let gg;
let perfect;
let photograph;
let soy;
let tat;
let tol;
let playlist;
let musicIndex = 0;
let shuffleIndex;

function preload() {
    ec = loadSound("sheerio/ec.mp3");
    gg = loadSound("sheerio/gg.mp3");
    perfect = loadSound("sheerio/perfect.mp3");
    photograph = loadSound("sheerio/photograph.mp3");
    soy = loadSound("sheerio/soy.mp3");
    tat = loadSound("sheerio/tat.mp3");
    tol = loadSound("sheerio/tol.mp3");
}

function setup() {
    let canvas = createCanvas(700, 600);
    canvas.parent("canvasContainer");

    playlist = [ec, photograph, gg, tat, perfect, soy, tol];
    shuffleIndex = random(1, 7);
}

function draw() {
    background(253, 237, 236);

    //text
    strokeWeight(0);
    fill(0);
    textSize(20);
    text("STREAM ED SHEERAN'S TOP HITS USING THE BUTTONS BELOW!", 40, 70);

    translate(-470, -300);
    scale(1.5);

    fill(150);
    stroke(0);
    strokeWeight(3);
    rect(400, 300, 300, 200, 10);
    fill(255, 200, 200);
    rect(425, 350, 250, 100, 10);
    fill(255, 255, 200); //top panel
    rect(440, 312, 220, 25, 5);
    stroke(255, 200, 200); // lines
    strokeWeight(2);
    line(442, 317, 658, 317);
    line(442, 322, 658, 322);
    line(442, 327, 658, 327);
    line(442, 332, 658, 332);
    noStroke();
    fill(110); //bottom panel
    rect(440, 465, 220, 35, 10);
    triangle(460, 500, 445, 465, 424, 500);
    triangle(675, 500, 656, 466, 624, 500);
    fill(255); //white panel
    stroke(0);
    strokeWeight(3);
    rect(490, 380, 120, 40, 20);

    noStroke();
    fill(60); //actual tape SPIN PART

    push();
    translate(510, 400);
    rotate(frameCount * 0.1);
    ellipse(0, 0, 44, 43);
    pop();

    push();
    translate(580, 400);
    rotate(frameCount * 0.1);
    ellipse(0, 0, 42, 45);
    pop();

    fill(0);
    circle(480, 400, 70); //base circles
    circle(610, 400, 70);
    fill(255, 150, 150);
    stroke(0);
    strokeWeight(3);
    circle(480, 400, 55);
    circle(610, 400, 55);
    fill(255);
    circle(480, 400, 40);
    circle(610, 400, 40);
    noStroke();
    fill(0); //nozzle looking things
    square(477, 380, 7);
    square(477, 413, 7);
    square(493, 397, 7);
    square(460, 397, 7);

    square(607, 380, 7);
    square(607, 413, 7);
    square(623, 397, 7);
    square(590, 397, 7);

}

function keyPressed() {
    console.log("Pressed")
    if (key === 'p' || key === 'P') {
        playlist[musicIndex].play();
    }
}

function playMusic() {
    if (playlist[musicIndex].isPlaying() == false) {
        playlist[musicIndex].play();
    } else {
        playlist[musicIndex].pause();
    }
}

function prevMusic() {
    playlist[musicIndex].stop();
    musicIndex--;
    if (musicIndex < 0) {
        musicIndex = playlist.length - 1;
    }
    playlist[musicIndex].play();
}

function nextMusic() {
    playlist[musicIndex].stop();
    musicIndex++;
    if (musicIndex == playlist.length) {
        musicIndex = 0;
    }
    playlist[musicIndex].play();
}
