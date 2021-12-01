let playerDisplay = 0;
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 3;
  }
  display() {
    image(playerImgList[playerDisplay], this.x, this.y, cellHeight, cellHeight);
  }
  move() {

    this.currentX = floor(((this.x + this.dx) - widthBuffer) / cellWidth);
    this.currentY = floor((this.y + this.dx) / cellHeight);

    if (this.withinBorder() && grid[this.currentY][this.currentX] !== 1) {
      if (keyIsDown(87)) { //w
        this.y += -this.dx;
        playerDisplay = 1;
      }
      if (keyIsDown(83)) { //s
        this.y += this.dx;
        playerDisplay = 0;
      }

      if (keyIsDown(68)) { //d
        this.x += this.dx;
      }

      if (keyIsDown(65)) { //a
        this.x += -this.dx;
      }
    }

    else { // bump back
      water.play();
      this.x = widthBuffer;
      this.y = 0;

    }

  }

  withinBorder() {
    return this.y >= 0 && this.y + cellHeight / 2 <= height && this.x >= widthBuffer && this.x <= width - widthBuffer;
  }

}

