class Cena02 extends Phaser.Scene {
    constructor() {
        super('Cena02');
    }

    init(data) {
        this.playerName = data.playerName;
    }

    create() {
        this.text = this.add.text(-100, 700, `Olá ${this.playerName}, bão?`, { fill: '#333' });
        document.getElementById('input2').style.display = 'block';
        document.getElementById('fileButton').addEventListener('click', () => {
            const playerImage = document.getElementById('linkBox').value;
            this.scene.start('Cena03', { playerImage: playerImage });
            // Oculta o overlay após iniciar
            document.getElementById('input2').style.display = 'none';
        });
    }

    update(){
        if(this.text.x < 300){
            this.text.x += 10;
        }
        if(this.text.y>300){
            this.text.y -=10;
        }
    }
}