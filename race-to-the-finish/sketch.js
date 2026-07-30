// show finish line
line(600, 0, 600, 300);

// red ball
fill(255, 0, 0);
ellipse(redXPos, redYPos, 50, 50);

// blue ball
fill(0, 0, 255);
ellipse(blueXPos, blueYPos, 50, 50);

// crossed finish line
if (redXPos > 575 || blueXPos > 575) {
    if (redXPos > blueXPos) {
        // red wins
        redScore++;
    } else if (blueXPos > redXPos) {
        // blue wins
        blueScore++;
    }

    redXPos = 25;
    redYPos = 100;
    blueXPos = 25;
    blueYPos = 200;
}