


class PowerUp {
  constructor(velx, vely, x, y, game) {
    this.value = 1;
    this.game = game;
    this.powerup = new createjs.Bitmap('images/redcube1.png');
    this.powerup.scaleX = 0.1;
    this.powerup.scaleY = 0.1;
    this.powerup.x = x + 15;
    this.powerup.y = y;
    this.velocity_x = velx;
    this.velocity_y = vely;
  }

  move() {
    this.powerup.x += this.velocity_x;
    this.powerup.y += this.velocity_y;
    this.checkPickUp();
  }

  checkPickUp() {
    let x;
    if(this.game.ship.ship.x-this.powerup.x < 0) {
      x = Math.abs(this.game.ship.ship.x-this.powerup.x - 100);
    } else {
      x = Math.abs(this.game.ship.ship.x-this.powerup.x + 100);
    }
    const y = Math.abs(this.game.ship.ship.y-this.powerup.y);
    if(x < 135 && y < 35) {
      this.game.stage.removeChild(this.powerup);
      this.game.powerups.splice(this.game.powerups.indexOf(this), 1);
      this.game.audio['powerupPickup'].play();
      if(this.game.ship.power < 2) {
        this.game.ship.power += 1;
      } else {
        this.game.ship.health += 5;
      }
    }
  }
}

export default PowerUp;
