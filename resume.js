class resumir extends Phaser.Scene {
  constructor() {
    super('resumir');
  }

  preload ()
  {   
    this.load.image('resume', 'assets/resume.png');
    
  }

  create() {
    var resume = this.add.image( 400, 300, 'resume').setDisplaySize(350, 250);
    

    resume.setInteractive();
        resume.on("pointerdown", () => {
          this.scene.stop();
          this.scene.resume('gameplay');
                         
        });
    }

  update() {
  
  }
}