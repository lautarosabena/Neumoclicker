var config = {
    type: Phaser.AUTO.FIT,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
        
    },
    scene: [Inicio, Teaser, Menuprincipal, Informacion, Help, Personaje, gameplay, ganarw, ganarm, perderw, perderm, Score, resumir, inter]
};
var game = new Phaser.Game(config);
