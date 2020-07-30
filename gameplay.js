class gameplay extends Phaser.Scene {
    constructor() {
      super('gameplay');
      
    }
    
    init(data){
        this.data.set('gender', data);
      }

        
    preload() {
        
        this.load.image('bacteria', 'assets/enemigo_1.png');
        this.load.image('bacteria2', 'assets/enemigo_2.png');
        this.load.image('bacteria3', 'assets/enemigo_3.png');
        this.load.image('barraVida', 'assets/lifebar.png');
        this.load.image('barraVidaR', 'assets/lifebar_red.png');
        this.load.image('boton', 'assets/test_button.png');
        this.load.spritesheet('player', 'assets/tix.png', {frameWidth: 59, frameHeight: 91});
        this.load.spritesheet('playerw', 'assets/tex.png', {frameWidth: 53, frameHeight: 89});
        this.load.spritesheet('cielo', 'assets/cielo.png', { frameWidth: 200, frameHeight: 72 });
        this.load.image('jefe1', 'assets/jefe1.png');
        this.load.image('jefe2', 'assets/jefe2.png');
        this.load.image('ciudad', 'assets/lvl_city.png');
        this.load.image('casa', 'assets/lvl_casa.png');
        this.load.image('background', 'assets/background.png');
        this.load.image('marco','assets/marco_gp.png');
        this.load.image('pasti', 'assets/pasti.png');
        this.load.image('qte_bad1', 'assets/qte_bad1.png');
        this.load.image('mancha', 'assets/mancha.png');
        this.load.audio('musica_casa', 'assets/audio/hogar.mp3');
        this.load.audio('musica_city', 'assets/audio/ciudad.mp3');
        this.load.audio('desventaja', 'assets/audio/Personaje_danado.mp3');
        this.load.image('pause', 'assets/pause.png');
        this.load.image('mute', 'assets/mute.png');
    }
    

    create() { 
        
        //Stats enemigo
        var x;
        var vida = 10;
        var maxVida = 10;
        var cont_en = 0;
        var barraVida;
        var ex = 400;
        var ey = 300;
        
        //stast player
        var atk = 1;
        var puntos = 0;
        var tiempo;
        var vidaP = 20;
        var maxVidaP = 20;
        var barraVidaPlayer;
        var autoAtk = 1;
        //--------------------------- 
        
        var aa = 0;
        var del = 1500;

        //-------- mejoras
        var test = 2;
        
        //##### Funciones ###
        function inter(){
            if(cont_en == 7){
                lol.pause = true;
                cont_en +=1;
                this.scene.pause();
                this.scene.launch('inter');
            }
        }

        //cambio de escena
        function cambio (){
            if(cont_en == 14 && gender == 2){
            
                if(puntos > localStorage.getItem("puntosm")){
                    localStorage.setItem("puntosm", puntos);
                }

            this.scene.start('ganarm1', puntos); // Se envian los datos a otra escena
            casaM.stop();
            cityM.stop();
            
            } else if(cont_en == 14 && gender != 2) {
                this.scene.start('ganarw1', puntos);
                casaM.stop();
                cityM.stop();
            }
        }
        
        //Autoataque
        function onEvent (){
            if(aa >= 1){
                if(vida >= 2 && vida > 0){
                    vida = vida - autoAtk;
                    barraVida.setScale(vida/maxVida*2,0.5);
                    
                }
            } 
        }

        //funcion para restar vida al player
        function atkP(){
            if(vidaP >=1){
                vidaP--;
                barraVidaPlayer.setScale(vidaP/maxVidaP, 0.5);
                if (vidaP <=0 && gender == 2){
                    this.scene.start('perderm');
                    casaM.stop();
                    cityM.stop();
                } else if(vidaP <=0 && gender != 2){
                    this.scene.start('perderw');
                    casaM.stop();
                    cityM.stop();
                }
            }  
        }

        //evento de accion rapida
        function Qte(){
            var qte = this.add.image(Phaser.Math.FloatBetween(200, 500), 500, 'pasti').setInteractive().setScale(1.4);
            this.physics.world.enable(qte);
            qte.body.setVelocity(0, Phaser.Math.Between(-100, -300));
    
            let pastisR = Phaser.Math.Between(1, 2);
            if(pastisR == 1){
                qte.setTexture('pasti');
            } else {
                qte.setTexture('qte_bad1');
            }
            var clickQTE = qte.on('pointerup', function(pointer){
                if(pastisR == 1){
                    puntos +=5;
                    puntosTxt.setText('Puntos: ' + puntos);
                } else {
                    puntos -=5;
                    puntosTxt.setText('Puntos: ' + puntos);
                }
                clickQTE.destroy();
            });
        }
        
        var mancha = this.add.image(189,11, '').setOrigin(0).setScale(1.92 , 2.5);

        
        function aparece_mancha(){
            mancha = this.add.image(189, 11, 'mancha').setOrigin(0).setScale(1.92 , 2.5);
            var desv = this.sound.add('desventaja', {loop: false});
            desv.play();
        }
        var time_mancha = this.time.addEvent({ delay: 9000, callback: aparece_mancha, callbackScope: this, loop: true });

        function desaparece_mancha(){
            mancha.destroy();
        }
        var time_mancha_borrar = this.time.addEvent({ delay: 5000, callback: desaparece_mancha, callbackScope: this, loop: true });
        
        var casaM = this.sound.add("musica_casa", {loop: true});
        var cityM = this.sound.add("musica_city", {loop: true});
        casaM.play();
        var bk_Gp = this.add.image(0, 0, 'background').setOrigin(0).setScale(1.92 , 2.5);
        var marco = this.add.image(0, 0, 'marco').setOrigin(0).setScale(1.92 , 2.5);
        var cielo = this.add.sprite(382, 100, 'cielo').setScale(1.93 , 2.5);
        var mute = this.add.image(55 ,64, 'mute').setScale(2);
        var pause = this.add.image(120, 140, 'pause').setScale(2);

        //boton de pausa
        pause.setInteractive();
        pause.on("pointerdown", () => {
                this.scene.pause();
                this.scene.launch('resumir');                
        });
        //boton mute
        mute.setInteractive();
        mute.on("pointerdown", () => {
            if (test !=2) {
            casaM.pause();
            cityM.pause();
            
            test = 2;
            } else {
                casaM.resume();
                cityM.resume();
                
                test = 1;
            }
        });
    
        //####Creacion y pos de sprites####
        this.anims.create({
            key: 'cielo',
            repeat: -1,
            frameRate: 2,
            frames: this.anims.generateFrameNames('cielo', {Start: 1, end: 7})
        });
        cielo.play('cielo');

        var bk_nivel = this.add.image(189, 11, 'casa').setOrigin(0).setScale(1.92 , 2.5).setInteractive();
        var bacteria = this.add.image(ex, ey, 'bacteria').setInteractive().setScale(1.5);
        
        
        var txt1 = this.add.text(640, 38, 'Ataque: $10', {fill: '#fff'});
        var botonAtk = this.add.image(688, 100, 'boton').setInteractive().setScale(1.92 , 2.5);

        var txt2 = this.add.text(625, 230, 'AutoAtaque: $10', {fill: '#fff'});
        var botonAutoAtk = this.add.image(688, 295, 'boton').setInteractive().setScale(1.92 , 2.5);

        var txt3 = this.add.text(630, 439, 'Curacion: $10', {fill: '#fff'});
        var botonCuracion = this.add.image(688, 500, 'boton').setInteractive().setScale(1.92 , 2.5);
      
        
        //player stats//
        var gender = this.data.get('gender');
        console.log(gender)
        if(gender != 2){
            var playerm = this.add.sprite(100, 410, 'playerw').setScale(1.92 , 2.5);
        this.anims.create({
            key: 'playerw',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('playerw', {Start: 1, end: 4})     
    
          });
          playerm.play('playerw');
        } else {
            var player = this.add.sprite(100, 410, 'player').setScale(1.92 , 2.5);
        this.anims.create({
            key: 'player',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('player', {Start: 1, end: 4})     
    
          });
          player.play('player');
        }

        var bkVidaPlayer = this.add.image(95, 550, 'barraVidaR').setScale(1, 0.5);
        barraVidaPlayer = this.add.image(95, 550, 'barraVida').setScale(1, 0.5);

                    //textos debbug//
        var puntosTxt = this.add.text(16, 200, 'Puntos: ' + puntos, {fill: '#ffffff' });
        var atkText = this.add.text(16, 232, '♆ Atk: ' + atk, {fill: '#ffffff' });
        var winTxt = this.add.text(320, 16, '', {fill: '#000' })
                    //------------//
                    
        //barra de vida enemigos
        var backgroundBar = this.add.image(385, 550, 'barraVidaR').setScale(2, 0.5);
        barraVida = this.add.image(385, 550, 'barraVida').setScale(2, 0.5);
       

        //ataque enemigo//
        var timeAtk = this.time.addEvent({ delay: del, callback: atkP, callbackScope: this, loop: true });
        var time = this.time.addEvent({ delay: 1, callback: cambio, callbackScope: this, loop: true });
        //auto ataque//
        var tiempo = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });
        //tiempo crear quicktime
        var timeQTE = this.time.addEvent({ delay: Phaser.Math.FloatBetween(4000, 9000), callback: Qte, callbackScope: this, loop: true });
        
        var lol = this.time.addEvent({delay: 1, callback: inter, callbackScope: this, loop: true});

        ///Atacar a la bacteria --------------------------------------------------------
        var pointer = bacteria.on('pointerup', function(pointer){ 
            vida = vida-atk;
            barraVida.setScale(vida/maxVida*2,0.5);
            bacteria.x = Phaser.Math.Between(250, 510);
            bacteria.y = Phaser.Math.Between(100, 440);
            
            
            if(vida <= 0){
                vida = 0; 
                //sistema de conteo de enemigos derrotados
                if(cont_en < 5 || cont_en >=6 && cont_en < 12){
                    if(cont_en >= 5){
                        bk_nivel.setTexture('ciudad');
                    }
                    //cambiar  de bacteria
                    var patron = Phaser.Math.FloatBetween(0, 1);
                    if (patron < 0.3){
                        if(cont_en <= 5){
                            vida = 10;
                            maxVida = 10;
                        } else {
                            vida = 10*4;
                            maxVida = 10*4;
                        }
                        bacteria.setTexture('bacteria');
                        winTxt.setText('');
                        del = 4000;
                    } else if (patron > 0.3 && patron < 0.6){
                        if(cont_en <= 5){
                            vida = 20;
                            maxVida = 20;
                        } else {
                            vida = 20*4;
                            maxVida = 20*4;
                        }
                        bacteria.setTexture('bacteria3');
                        winTxt.setText('');
                        del = 4000;
                    } else {
                        if(cont_en <= 5){
                            vida = 16;
                            maxVida = 16;
                        } else {
                            vida = 16*4;
                            maxVida = 16*4;
                        }
                        bacteria.setTexture('bacteria2');
                        winTxt.setText('');
                        del = 4000;
                    } 

                } else if(cont_en == 5){
                    bacteria.setTexture('jefe1'); 
                    winTxt.setText('☠ J E F E ☠');
                    vida = 75;
                    maxVida = 75;
                    del = 1000;
                } else if (cont_en == 12){
                    bacteria.setTexture('jefe2'); 
                    winTxt.setText('☠ J E F E ☠');
                    vida = 125;
                    maxVida = 125;
                    del = 1000;
                    
                } else {
                    timeAtk.paused = true;
                    timeQTE.paused = true;
                    tiempo.paused = true;
                    bacteria.destroy();//cuando la vida llega a 0, la bacteria se destruye 
                    backgroundBar.destroy();
                    
                }
 
                cont_en += 1;
                puntos += 10; 
                barraVida.setScale(vida/maxVida*2,0.5);
                
               if(cont_en == 7){
                    casaM.stop();
                    cityM.play();
                    
                }               
                
            }
            puntosTxt.setText('Puntos: ' + puntos);
            
         });
  
        //--- mejoras --//
        
        var clickBtn = botonAtk.on('pointerup', function(pointer){
            if(puntos >= 10){
                if(atk == 1){
                    atk += 1;
                    atkText.setText('♆ Atk: ' + atk);
                }else{
                    atk += 2;
                    atkText.setText('♆ Atk: ' + atk);
                }
                puntos -= 10;
                puntosTxt.setText('Puntos: ' + puntos);
            }
        });
        
        
        //--- autoataque ---//
        var cAA = 2;
        var clickBtnAA = botonAutoAtk.on('pointerup', function(pointer){
            if(puntos >= 10){
                autoAtk++;
                aa++
                puntos -= 10;   
                puntosTxt.setText('Puntos: ' + puntos);              
            }
        });

        //curacion//
        var clickCuracion = botonCuracion.on('pointerup', function(pointer){
            if(puntos >= 10 && vidaP < maxVidaP){
                vidaP = maxVidaP;
                puntos -= 10;
                puntosTxt.setText('Puntos: ' + puntos);
                barraVidaPlayer.setScale(vidaP/maxVidaP, 0.5);
            }
        });               
        
    }
    
    
    update() {   
    }
 
}






    
