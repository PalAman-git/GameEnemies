const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
const EnemiesArray = [];
const NoOfEnemy = 1000;

let gameframe = 0;

class Enemies {
  constructor(image) {
    this.image = new Image();
    this.image.src = image;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    // this.speed = Math.random() * 4 - 2;
    this.height = this.spriteHeight / 2.5;
    this.width = this.spriteWidth / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frames = 1;
    this.flapspeed = Math.floor(Math.random() * 3 + 1);
  }
  draw() {
    // c.fillRect(this.x, this.y, this.width, this.height);
    c.drawImage(
      this.image,
      this.frames * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update() {
    this.y += Math.random() * 5 - 2.5;
    this.x += Math.random() * 5 - 2.5;
    if (gameframe % this.flapspeed == 0) {
      this.frames > 4 ? (this.frames = 0) : this.frames++;
    }

    if (this.x + this.width + this.speed >= canvas.width || this.x < 0) {
      this.speed = -this.speed;
    }
    if (this.y + this.height + this.speed >= canvas.height || this.y < 0) {
      this.speed = -this.speed;
    }

    this.draw();
  }
}

for (let i = 0; i < NoOfEnemy; i++) {
  EnemiesArray.push(new Enemies("./enemies/enemy1.png"));
}
function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  EnemiesArray.forEach((enemy) => {
    enemy.update();
  });
  gameframe++;
  requestAnimationFrame(animate);
}
animate();
