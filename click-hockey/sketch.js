// draw goal
fill(0, 255, 0);
rect(250, 490, 60, 20);

// draw ball
fill(255, 0, 255);
rect(xPos, yPos, 30, 30);

// draw score
fill(18);
textSize(20);
text("Score: " + score, 10, 25);

// check if in goal
if (
    xPos + 15 >= 220 &&
    xPos - 15 <= 280 &&
    yPos + 15 >= 480
) {
    score++;

    xPos = random(15, 485);
    yPos = 0;
    xSpeed = random(-5, 5);
    ySpeed = random(0, 10);
}