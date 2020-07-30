class Personaje extends Phaser.Scene {
    constructor() {
      super('personaje');
    }

    preload ()
    {
      this.load.image('background', 'assets/background.png');
      this.load.spritesheet('player_woman', 'assets/tex.png', {frameWidth: 53, frameHeight: 89});
      this.load.spritesheet('player_men', 'assets/tix.png', {frameWidth: 59, frameHeight: 91});     
      this.load.image('backboton', 'assets/back_button.png');
      this.load.image('marcop', 'assets/marcop.png');
      this.load.audio("click", "assets/audio/Boton.mp3");
      this.load.audio("menu", "assets/audio/menu.mp3");
    }

    create() {
      var gender;
      var menu = this.sound.add("menu", {loop: true});
     
      var music = this.sound.add("click", {loop: false});
      var background = this.add.image( 400, 300, 'background').setDisplaySize(800, 600);
      var marco = this.add.image(550,300, 'marcop').setScale(2);
      var marco = this.add.image(250,300, 'marcop').setScale(2);

      var player_woman = this.add.sprite(550, 300, 'player_woman').setScale(2);
      player_woman.setInteractive();

      this.anims.create({
        key: 'player_woman',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('player_woman', {Start: 1, end: 4})     

      });
      player_woman.play('player_woman');

      player_woman.on("pointerdown", () => {
        music.play();
        this.sound.stopAll();
        gender = 1;
        this.scene.start('gameplay');
      });
  
      var player_men = this.add.sprite(250, 300, 'player_men').setScale(2);
      player_men.setInteractive();

      this.anims.create({
        key: 'player_men',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('player_men', {Start: 1, end: 4})     

      });
      player_men.play('player_men');

      player_men.on("pointerdown", () => {
        gender = 2;
        menu.stop();
        this.sound.stopAll();
        this.scene.start('gameplay', gender);
      });
      var botonatras = this.add.image( 100, 520, 'backboton').setScale(2);
      botonatras.setInteractive();
      botonatras.on("pointerdown", () => {
        music.play();
        this.scene.start('Menuprincipal', gender);
    });
  
  }
}
  

