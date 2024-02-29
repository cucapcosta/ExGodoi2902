
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 480,
    height: 640,
    backgroundColor:0xffffff,
    scene: [Cena01, Cena02, Cena03]
};

const game = new Phaser.Game(config);
