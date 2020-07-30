class Teaser extends Phaser.Scene {
  constructor() {
    super('teaser');
  }

  preload ()
  {   
    this.load.image('carga', 'assets/teaser.png');
    this.load.image('fondo', 'assets/background.png');  
    this.load.audio("menu", "assets/audio/menu.mp3");
  }

  create() {
    this.add.image( 400, 300, 'carga').setDisplaySize(800, 600);
    
    }

  update() {
    var menu = this.sound.add("menu", {loop: true},);
    function cambio() {
      this.scene.start('Menuprincipal');
      menu.play();
    }
    this.time.addEvent({ delay: 2000, callback: cambio, callbackScope: this, loop: false });
  }  
  
}