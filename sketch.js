let myBubble1 = [];
let myBubble2 = [];
let myLines = [];
let bgColor = 220;

function setup() {
    createCanvas(600, 600);

    for (let i = 0; i < 70; i ++) {
        myBubble1 [i] = new Bubble1(255, random(width), random(height), random(-3, 3), random(-3, 3));
        myBubble2 [i] = new Bubble2(0, random(width), random(height), random(-3, 3), random(-3, 3));
    }

    for (let i = 0; i < 200; i ++){
        myLines [i] = new Lines(random (0, 200), 
        random (200, 400), 
        random (400, 600), 
        random ((i - 10) * 3, (i + 10) * 3), 
        random ((i - 10) * 3, (i + 10) * 3), 
        random ((i - 10) * 3, (i + 10) * 3),
        random (-5, 5), 
        random (-5, 5));
    }

    
}

function draw() {
    background(bgColor);

    for (let i = 0; i < 200; i ++){
        myLines[i].display();
    }

    if (keyIsPressed === true) {
        bgColor = 30;
        for (let i = 0; i < 70; i++) {
            myBubble1[i].move();
            myBubble1[i].display();
        }
    } else {
        bgColor = 220;
        for (let i = 0; i < 70; i++) {
            myBubble2[i].move();
            myBubble2[i].display();
        }
    }

}

class Bubble1 {
    constructor(tempC, tempXpos, tempYpos, tempSpeedX, tempSpeedY) {
        this.c = tempC;
        this.opacity = 255;
        this.xpos = tempXpos;
        this.ypos = tempYpos;
        this.xspeed = tempSpeedX;
        this.yspeed = tempSpeedY;
        this.size = 20;
        this.sizePlus = 2;
        this.clicked = false;
    }

    display() {
        stroke(255);

        if (dist(this.xpos, this.ypos, mouseX, mouseY) < this.size + 10) {
            fill(255, this.opacity);
            this.opacity -= this.sizePlus;
            this.size += this.sizePlus;
            if (this.size > 40) {
                this.size = 40;
            }
            if(mouseIsPressed){
                this.clicked = true;
            }
        } else {
            fill(this.c);
            this.size -= this.sizePlus;
            if (this.size < 20) {
                this.size = 20;
            }
           
        }

        if(this.clicked){
            noFill ();
        }
        
        ellipse(this.xpos, this.ypos, this.size);
    }

    move() {
        if (dist(this.xpos, this.ypos, mouseX, mouseY) < this.size + 10) {

        } else {
            this.xpos += + this.xspeed;
            this.ypos += + this.yspeed;
        }

        if (this.xpos > width || this.ypos > height) {
            this.xspeed = - this.xspeed;
            this.yspeed = - this.yspeed;
        }
        if (this.xpos < 0 || this.ypos < 0) {
            this.xspeed = - this.xspeed;
            this.yspeed = - this.yspeed;
        }
    }
}

    class Bubble2 {
        constructor(tempC, tempXpos, tempYpos, tempSpeedX, tempSpeedY) {
            this.c = tempC;
            this.opacity = 255;
            this.xpos = tempXpos;
            this.ypos = tempYpos;
            this.xspeed = tempSpeedX;
            this.yspeed = tempSpeedY;
            this.size = 20;
            this.sizePlus = 2;
            this.clicked = false;
        }
    
        display() {
            stroke(0);
    
            if (dist(this.xpos, this.ypos, mouseX, mouseY) < this.size + 10) {
                fill(0, this.opacity);
                this.opacity -= this.sizePlus;
                this.size += this.sizePlus;
                if (this.size > 40) {
                    this.size = 40;
                }
                if(mouseIsPressed){
                    this.clicked = true;
                }
            } else {
                fill(this.c);
                this.size -= this.sizePlus;
                if (this.size < 20) {
                    this.size = 20;
                }
               
            }
    
            if(this.clicked){
                noFill ();
            }
            
            ellipse(this.xpos, this.ypos, this.size);
        }
    
        move() {
            if (dist(this.xpos, this.ypos, mouseX, mouseY) < this.size + 10) {
    
            } else {
                this.xpos += + this.xspeed;
                this.ypos += + this.yspeed;
            }
    
            if (this.xpos > width || this.ypos > height) {
                this.xspeed = - this.xspeed;
                this.yspeed = - this.yspeed;
            }
            if (this.xpos < 0 || this.ypos < 0) {
                this.xspeed = - this.xspeed;
                this.yspeed = - this.yspeed;
            }
        }
    }
    class Lines {
        constructor(tempX1, tempX2, tempX3, tempY1, tempY2, tempY3, tempDirX, tempDirY) {
            this.x1 = tempX1;
            this.x2 = tempX2;
            this.x3 = tempX3;
            this.y1 = tempY1;
            this.y2 = tempY2;
            this.y3 = tempY3;
            this.dirX = tempDirX;
            this.dirY = tempDirY;  
        }

        display () {
            line (-50, 300, this.x1, this.y1);
            line (this.x1, this.y1, this.x2, this.y2);
            line (this.x2, this.y2, this.x3, this.y3);
            line (this.x3, this.y3, 650, 300);

            this.x1 += this.dirX;
            this.y1 += this.dirY;
            this.x2 += this.dirX;
            this.y2 += this.dirY;
            this.x3 += this.dirX;
            this.y3 += this.dirY;

            if (this.x1 < -100 || this.x1 > 700 || this.x2 < -100 || this.x2 > 700 || this.x3 < -100 || this.x3 > 700) {
                this.dirX = - this.dirX;
            }
            if (this.y1 < -100 || this.y1 > 700 || this.y2 < -100 || this.y2 > 700 || this.y3 < -100 || this.y3 > 700) {
                this.dirY = - this.dirY;
            }
        }
    }
    