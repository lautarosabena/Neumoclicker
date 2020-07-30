class inter extends Phaser.Scene {
  constructor() {
    super('inter');
  }

  preload (){
    this.load.image('backg', 'assets/background.png');
    this.load.image('play', 'assets/test_button.png');
    this.load.image('info1', 'assets/info1.png');
    this.load.image('info2', 'assets/info2.png');
    this.load.image('info3', 'assets/info3.png');
  }

  create() {
    var resume = this.add.image( 400, 300, 'backg').setDisplaySize(800, 600);
    var play = this.add.image(400, 500, 'play').setInteractive();
    var info = this.add.image(400, 300, 'info1').setDisplaySize(700, 500);
    var ran = Phaser.Math.Between(1,3);
    console.log(ran);
    if(ran == 1){
      info.setTexture('info1');
      console.log('111');
    } else if(ran == 2){
      info.setTexture('info2');
      console.log('22222');
    } else if( ran == 3){
      info.setTexture('info3');
      console.log('333333');
    }
        play.on("pointerdown", () => {
          this.scene.stop();
          this.scene.resume('gameplay');
        });
    }



  update() {

  }
}