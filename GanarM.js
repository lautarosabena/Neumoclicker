class ganarm extends Phaser.Scene {
    constructor() {
      super('ganarm1');
    }
    // Se traen los puntos de la otra escena
    init(data){
      this.data.set('puntos', data);
    }
   


    preload ()
    {
      this.load.spritesheet('menwin', 'assets/menwin.png',  { frameWidth: 59, frameHeight: 91 });
      this.load.image('win_txt', 'assets/win_txt.png');
      this.load.image('background', 'assets/background.png');
      this.load.image('back_button', 'assets/back_button.png');   
      this.load.audio("menu", "assets/audio/menu.mp3");
      
    }
    
    create() {
      
      var background = this.add.image( 400, 300, 'background').setDisplaySize(800, 600);
      var win_txt = this.add.image( 400, 100, 'win_txt').setScale(2);           
      var menu = this.sound.add("menu", {loop: true});
      var menwin = this.add.sprite(400, 350, 'menwin').setScale(3);
      this.anims.create({
        key: 'menwin',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('menwin', {Start: 1, end: 4})
      });
      menwin.play('menwin')     
      
      var back_button = this.add.image(80,500, 'back_button').setScale(1.5);
      back_button.setInteractive()
      back_button.on('pointerdown', () => this.scene.start('Menuprincipal'), menu.play() );
      this.add.text(150, 500, ("Tu puntuacion fue de ") + this.data.get('puntos') + (" puntos"), {fontSize: '32px'}); // Los detallamos en la escena
      
    }
    
}
