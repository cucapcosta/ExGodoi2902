class Cena03 extends Phaser.Scene {
    constructor() {
        super('Cena03');
    }

    init(data){
        this.playerImagem = data.playerImage;
    }
    preload(){
        this.load.image('imagem', this.playerImagem);
    }
    create(){
        this.add.image(240, 320, 'imagem');
    }
}
