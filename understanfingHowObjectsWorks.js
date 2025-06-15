class Carro {
    constructor(marca, modelo, cor, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.velocidadeAtual = 0;
        this.ligado = false;
    }

    //criando os metodos que o carro pode fazer
    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`O ${this.modelo} ${this.marca} ligou.`);
        } else {
            console.log(`O ${this.modelo} ${this.marca} ja esta ligado.`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            this.velocidadeAtual = 0;
            console.log(`O ${this.modelo} ${this.marca} desligou.`);           
        } else {
            console.log(`O ${this.modelo} ${this.marca} já está ligado.`);           
        }
    }

    acelerar(quantidade) {
        if (this.ligado) {
            this.velocidadeAtual += quantidade;
            console.log(`O ${this.modelo} ${this.marca} acelerou para ${this.velocidadeAtual} Km/h.`);
        } else {
            console.log(`O ${this.modelo} ${this.marca} está desligado. Não pode acelerar.`);
        }
    }
} 

// crinado as instancias/objetos
const carroCarlos = new Carro ("Chevrolet", "S10", "branco", 2025);
const carroBeth = new Carro ("Fiat", "Toro", "Preto", 2025);

console.log("\n\n Ações do carro do Carlos");

carroCarlos.desligar();
carroCarlos.ligar();
carroCarlos.acelerar(80);

console.log("\n\n Ações do carro da Beth");

carroBeth.ligar();
carroBeth.desligar();
carroBeth.ligar();
carroBeth.acelerar(20);