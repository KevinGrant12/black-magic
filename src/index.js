import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: window.innerWidth,
  height: window.innerHeight,
  // scene: {
  //   preload: preload,
  //   create: create,
  //   update: update
  // }
  scene: [Scene1, Scene2]
};

const game = new Phaser.Game(config);

function preload() {
  // this.load.image("logo", logoImg);
}

function create() {
  // const logo = this.add.image(400, 150, "logo");
  // const magician = this.add.sprite(100, 100, 'magician', 0);


  // this.tweens.add({
  //   targets: logo,
  //   y: 450,
  //   duration: 2000,
  //   ease: "Power2",
  //   yoyo: true,
  //   loop: -1
  // });
}

// function update() {
//   movePlayerManager();
// }

// function movePlayerManager() {
//   if ( this.cursorKeys.left.isDown) {
//     magician.play('left');
//   }
// }