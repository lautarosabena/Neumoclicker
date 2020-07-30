class ganarw extends Phaser.Scene {
    constructor() {
      super('ganarw1');
    }
    // Se traen los puntos de la otra escena
    init(data){
      this.data.set('puntos', data);
    }
   


    preload ()
    {
      this.load.spritesheet('womanwin', 'assets/womanwin.png',  { frameWidth: 53, frameHeight: 90 });
      this.load.image('win_txt', 'assets/win_txt.png');
      this.load.image('background', 'assets/background.png');
      this.load.image('back_button', 'assets/back_button.png');   
      this.load.audio("menu", "assets/audio/menu.mp3");
      
    }
    
    create() {
      
      var background = this.add.image( 400, 300, 'background').setDisplaySize(800, 600);
      var win_txt = this.add.image( 400, 100, 'win_txt').setScale(2);           
      var menu = this.sound.add("menu", {loop: true});
      var womanwin = this.add.sprite(400, 350, 'womanwin').setScale(3);
      var gender = this.data.get('gender');
        console.log(gender)
      this.anims.create({
        key: 'womanwin',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('womanwin', {Start: 1, end: 4})     
      });
      womanwin.play('womanwin');      
      
      var back_button = this.add.image(80,500, 'back_button').setScale(1.5);
      back_button.setInteractive()
      back_button.on('pointerdown', () => this.scene.start('Menuprincipal'), menu.play() );
      this.add.text(150, 500, ("Tu puntuacion fue de ") + this.data.get('puntos') + (" puntos"), {fontSize: '32px'}); // Los detallamos en la escena
      
    }
    
}
