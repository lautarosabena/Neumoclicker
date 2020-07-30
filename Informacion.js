class Informacion extends Phaser.Scene {
  constructor() {
    super('informacion');
  }

  preload ()
  {
    this.load.image('backboton', 'assets/back_button.png');
    this.load.image('fondo', 'assets/background.png');
    this.load.image('pregunta', 'assets/txt_info.png')
    this.load.audio("click", "assets/audio/Boton.mp3");
    this.load.audio("menu", "assets/audio/menu.mp3");
  }
  create() {
      
      var background = this.add.image( 400, 300, 'fondo').setDisplaySize(800, 600);
      var backboton = this.add.image( 120, 500, 'backboton').setDisplaySize(150, 150);
      var jugar = this.add.image( 400 , 180, 'pregunta').setDisplaySize(750, 270);
      var menu = this.sound.add("menu", {loop: true},);
      var music = this.sound.add("click", {loop: false});
      backboton.setInteractive();
      backboton.on("pointerdown", () => {
        music.play();
        this.scene.start('Menuprincipal');
      });
      
    }
}