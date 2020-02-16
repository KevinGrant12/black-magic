class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }
  
  create() {
    this.add.text(20,20, "Loaded game...$$", { fill: "yellow" });
    this.magician = this.add.sprite(100, 100, 'magician', 0);
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.isWalking = false;
    // this.lastKeyDown = "";

    this.anims.create({
      key: 'up',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('magician', { start: 12, end: 15 }),
      repeat: -1
    });
  
    this.anims.create({
      key: 'right',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('magician', { start: 8, end: 11 }),
      repeat: -1  
    });
  
    this.anims.create({
      key: 'down',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('magician', { start: 0, end: 3 }),
      repeat: -1
    });
  
    this.anims.create({
      key: 'left',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('magician', { start: 4, end: 7 }),
      repeat: -1
    });

    // document.addEventListener('keyup', event => {
    //   console.log(event)
    //   if ( event.code === this.lastKeyDown ) {
    //     this.anims.pauseAll;
    //   }
    // });
    console.log(this.anims)
  }

  update() {
    
    this.movePlayerManager();
    
  }

  movePlayerManager() {

    if (this.cursorKeys.up.isDown) {
      this.anims.anims.entries.up.paused = false
      if (this.isWalking == false) {
        this.isWalking = true
        this.anims.play('up', this.magician);
      }
      
    } else if (this.cursorKeys.right.isDown) {
      this.anims.anims.entries.right.paused = false
      if (this.isWalking == false) {
        this.isWalking = true
        this.anims.play('right', this.magician);
      }
      
    } else if (this.cursorKeys.down.isDown) {
      this.anims.anims.entries.down.paused = false
      if (this.isWalking == false) {
        this.isWalking = true
        this.anims.play('down', this.magician);
      }
      
    } else if (this.cursorKeys.left.isDown) {
      this.anims.anims.entries.left.paused = false
      if (this.isWalking == false) {
        this.isWalking = true
        this.anims.play('left', this.magician);
      }
      
    } else {
      this.anims.anims.entries.up.paused = true
      this.anims.anims.entries.right.paused = true
      this.anims.anims.entries.down.paused = true
      this.anims.anims.entries.left.paused = true
      this.isWalking = false
    }
    
    // if ( this.cursorKeys.right.isDown) {
      //   this.anims.play('right', this.magician);
    //   this.lastKeyDown = 'right'
    // } else if ( this.cursorKeys.down.isDown) {
    //   this.anims.play('down', this.magician);
    //   this.lastKeyDown = 'down'
    // } else if ( this.cursorKeys.left.isDown) {
    //   this.anims.play('left', this.magician);
    //   this.lastKeyDown = 'left'  
    // } else {
    //   // this.anims.pause();
    // }
  }
}

export default Scene2;