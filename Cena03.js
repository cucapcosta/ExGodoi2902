class Cena03 extends Phaser.Scene {
    constructor() {
        super('Cena03');
    }

    init(data){
        this.playerImagem = data.playerImage;
        this.playerNome = data.playerName;
    }
    preload(){
        this.load.image('imagem', "/assets/nossos/" + this.playerImagem + ".png");
    }
    create(){
        if(this.playerImagem == 'godoidrip'){
            if(this.playerNome == 'godoi' || this.playerNome == 'Godoi'){
                this.add.image(240, 320, 'imagem').setScale(0.5);
            }else{
                this.add.text(10, 320, 'Você não tem acesso a esse arquivo', { fill: '#333' });
            }

        }else{
            this.add.image(240, 320, 'imagem');
        }

    }
}
