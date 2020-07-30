class Help extends Phaser.Scene {
    constructor() {
      super('help');
    }

    preload ()
    {
      this.load.image('background', 'assets/background.png');
      this.load.image('txt_help', 'assets/txt_help.png');
      this.load.image('enemy', 'assets/Bacteria5.png');
      this.load.spritesheet('manito_click', 'assets/manito_click.png', { frameWidth: 80, frameHeight: 81 });
      this.load.image('back_button', 'assets/back_button.png');
      this.load.audio("click", "assets/audio/Boton.mp3");
      this.load.audio("menu", "assets/audio/menu.mp3");  
    }

    create() {
      var background = this.add.image( 400, 300, 'background').setDisplaySize(800, 600);
      var txt_help = this.add.image( 400, 100, 'txt_help').setScale(1.9);
      var enemy = this.add.image(400,300, 'enemy').setScale(2);
      var manito_click = this.add.sprite(400,420, 'manito_click').setScale(1.8);    
      var music = this.sound.add("click", {loop: false});  
      
      this.anims.create({
        key: 'manito_click',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('manito_click', {Start: 1, end: 6})     

      });
      manito_click.play('manito_click');      
      
      var botonatras = this.add.image( 100, 520, 'backboton').setScale(2);
      botonatras.setInteractive();
      botonatras.on("pointerdown", () => {
        music.play();
        this.scene.start('Menuprincipal');
    });
      
    }
}
