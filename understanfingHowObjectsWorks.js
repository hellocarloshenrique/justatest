class Carro {
    constructor(marca, modelo, cor, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.velocidadeAtual = 0;
        this.logado = false;
    }

    //criando os metodos que o carro pode fazer
    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`O ${this.modelo} ${this.marca} ligou`);
        } else {
            console.log(`O ${this.modelo} ${this.marca} ja esta ligado`);
        }
    }
}

// crinado as instancias/objetos
const carroCarlos = new Carro ("Chevrolet", "S10", "branco", 2025);

console.log("\n\n Ações do carro do Carlos");

carroCarlos.ligar();