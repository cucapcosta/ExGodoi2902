class Cena03 extends Phaser.Scene {
    constructor() {
        super('Cena03');
    }

    init(data){
        this.playerImage = data.playerImage;
    }
    preload(){
        this.load.image('foto', this.playerImage);
    }
    create(){
        this.image = this.add.image(240, 340, this.playerImage);
    }
}