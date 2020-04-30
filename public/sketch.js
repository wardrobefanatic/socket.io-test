var socket;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(120, 0, 35);
    socket = io.connect('http://localhost:3000')
    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    stroke(255);
    fill(5);
    if (mouseIsPressed === true) {
        ellipse(data.x, data.y, pmouseX / 10, 35);
    }

}

function mouseDragged() {
    console.log('Sending:' + mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse', data);

    stroke(255);
    fill(255);
    if (mouseIsPressed === true) {
        ellipse(mouseX, mouseY, pmouseX / 10, 35);
    }
}

function draw() {

}