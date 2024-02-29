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
        console.log("Parou aqui 1")
        if(this.playerImagem == 'godoidrip' || this.playerImagem == 'godoidrippx'){
            console.log("Parou aqui 2")
            if(this.playerNome == 'godoi' || this.playerNome == 'Godoi'){
                this.add.image(240, 320, 'imagem').setScale(0.5);
            }else{
                this.add.text(10, 320, 'Você não tem acesso a esse arquivo', { fill: '#333' });
            }

        }else if(this.playerImagem =="sallouti"){
            console.log('Parou aqui 3');
            if(this.playerNome == 'adm_inteli' || this.playerNome == 'sallouti'){
                this.add.image(240, 320, 'imagem').setScale(0.5);
                this.add.text(200, 500  , 'Festa', { fill: '#333' }).setScale(3);
            }else{
                this.add.text(10, 320, 'Você não tem acesso a esse arquivo', { fill: '#333' });
            }
        }else{
            console.log('chegou aqui')
            this.add.image(240, 320, 'imagem');
        }

    }
}
