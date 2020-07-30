class perderw extends Phaser.Scene {
  constructor() {
    super('perderw');
  }

    preload ()
    {
      this.load.image('playerwoman_muerto', 'assets/playerwoman_muerto.png'); 
      this.load.image('loose_txt', 'assets/loose_txt.png');
      this.load.image('background', 'assets/background.png');
      this.load.image('back_button', 'assets/back_button.png');   
      this.load.audio("menu", "assets/audio/menu.mp3");
      
    }

    create() {
      var menu = this.sound.add("menu", {loop: true});
      var background = this.add.image( 400, 300, 'background').setDisplaySize(800, 600);
      var loose_txt = this.add.image( 400, 100, 'loose_txt').setScale(2);      
      var playerwoman_muerto = this.add.image(400,350, 'playerwoman_muerto').setScale(3);     
      
      var back_button = this.add.image(80,500, 'back_button').setScale(1.5);
      back_button.setInteractive()
      back_button.on('pointerdown', () => this.scene.start('Menuprincipal'), menu.play() );

      
    }
}
