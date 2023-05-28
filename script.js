const fps = 120;
const gamewindow = document.getElementById("gamewindow");
const object = gamewindow.getContext("2d");
const logElm = document.getElementById("status");
let gravity = 0;
let speed = 0;
let x = 250;
let y = 100;

window.getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

window.drawObjects = () => {
    gravity += 0.2;

    x += speed;
    y += gravity;

    y += 1;
    if (y > 485 | y < 15) {
        y += -1;
        speed *= 0.94;
        y += gravity * -1;
        gravity *= -0.3;
        if (Math.abs(gravity) < 0.1 && Math.abs(speed) < 0.01) {
            gravity = getRandomArbitrary(-15, -5);
            speed = getRandomArbitrary(-10, 10);
        }
    } else {
        y += -1;
        speed *= 0.996;
    }
    if (x > 485 | x < 15) {
        x += speed * -0.9;
        speed *= -0.9;
    }

    object.beginPath();
    object.arc(x, y, 15, 0, Math.PI * 2, true);
    object.closePath();
    object.fill();
}

window.setInterval(() => {
    object.clearRect(0, 0, 500, 500);
    drawObjects();
}, 1000 / fps);