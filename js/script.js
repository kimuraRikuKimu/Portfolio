const balls = [];

function setup() {
    const canvasParent = document.getElementById('canvas-parent');
    const canvasWidth = canvasParent.offsetWidth;
    const sketchCanvas = createCanvas(canvasWidth, 450);
    sketchCanvas.parent('canvas-parent');

    for (let i =0; i < 50; i++) {
        const r = random(10, 30);
        balls.push({
            x: random(r, width - r), y: random(r, height - r),
            sx: random(-2.0, 2.0), sy: random(-2.0, 2.0),
            r: r,
            c1: color(100, 200, 250, 150),
            c2: color(250, 200, 100, 150),
        });
    }
}

function draw() {
    background(200);

    for (let ball of balls) {
        ball.x += ball.sx;
        ball.y += ball.sy;
        if (ball.r > ball.x || ball.x > width - ball.r) {
            ball.sx *= -1.0;
            ball.x = constrain(ball.x, ball.r, width - ball.r);
        }
        if (ball.r > ball.y || ball.y > height - ball.r) {
            ball.sy *= -1.0;
            ball.y = constrain(ball.y, ball.r, height - ball.r);
        }

        noStroke();
        if (dist(mouseX, mouseY, ball.x, ball.y) < ball.r) {
            fill(ball.c2);
        } else {
            fill(ball.c1);
        }
        ellipse(ball.x, ball.y, ball.r * 2, ball.r * 2);
    }
}
