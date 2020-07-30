class Inicio extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload (){
      this.load.image('botonayuda', 'assets/boton_ayuda.png');
      this.load.image('backboton', 'assets/back_button.png');
      this.load.image('fondo', 'assets/background.png');
      this.load.image('ingles', 'assets/boton_en.png');
      this.load.image('español', 'assets/boton_espa.png');
      this.load.image('informacion', 'assets/boton_info.png');
      this.load.image('jugar', 'assets/boton_jugar.png');
      this.load.image('portugues', 'assets/boton_por.png');
      this.load.image('rank', 'assets/boton_rank.png');
      this.load.image('enemigo1', 'assets/enemigo_1.png');
      this.load.image('enemigo2', 'assets/enemigo_2.png');
      this.load.image('logo', 'assets/logo2D.png');
      this.load.image('neumo', 'assets/neumoclicker.png');
      this.load.image('masculino', 'assets/player_men.png');
      this.load.image('femenino', 'assets/player_woman.png');
      this.load.image('carga', 'assets/teaser.png');
      this.load.image('ayuda', 'assets/txt_help.png');
      this.load.image('informacion', 'assets/txt_info.png');
      this.load.image('rank', 'assets/Ranking.png');
      this.load.audio("click", "assets/audio/Boton.mp3");
    }

    create() {


      var fondo = this.add.image( 400, 300, 'fondo').setDisplaySize(800, 600);
      var spanish = this.add.image(150,300,'español').setDisplaySize(200, 130);
      var english = this.add.image(400,300,'ingles').setDisplaySize(200, 130);
      var portugeis = this.add.image(650,300,'portugues').setDisplaySize(200, 130);
      var music = this.sound.add("click", {loop: false});
      
      
      spanish.setInteractive();
      spanish.on("pointerdown", () => {
        music.play();
        this.scene.start('teaser');
        
      
      });
      english.setInteractive();
      english.on("pointerdown", () => {
          music.play();
          this.scene.start('teaser');
      });

      portugeis.setInteractive();
      portugeis.on("pointerdown", () => {
        music.play();
        this.scene.start('teaser');
      });
      
      
    
      
    }
      
       update() {
        
       }

    }

