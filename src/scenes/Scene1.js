import Magician from '../assets/sprites/magician.png';

class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.spritesheet('magician', Magician, { frameWidth: 48, frameHeight: 64});
  }

  create() {
    this.add.text(20,20, "Loading game...");

    setTimeout(() => {
      this.scene.start("playGame");
    }, 1000);
  }
}

export default Scene1;