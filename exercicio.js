// 1 - Classe de Abstração
function Animal(nome, tipo, idade, cor, preco) {
    this.nome = nome;
    this.tipo = tipo;
    this.idade = idade;
    this.cor = cor;
    let _preco = preco;

    //Get
    this.getPreco = function() {
        return _preco;
    }

    //Set
    this.setPreco = function(valor) {
        if(typeof valor === 'number') {
            _preco = valor;
        }
    }

    //EmitirSom
    this.EmitirSom = function () {
        return "Algum som genérico";
    };

    //Descricao
    this.Descricao = function () {
        return `O animal chamado ${this.nome} tem ${this.idade} anos, sua cor predominante é ${this.cor} e custa R$ ${this.getPreco()}. Ele emite o seguinte som: "${this.EmitirSom()}".`;
    };
} 

// 2 - Classes Herdeiras
function Cachorro(nome, idade, cor, preco) {
    Animal.call(this, nome, "Cachorro", idade, cor, preco);
    this.EmitirSom = function() {
        return "Au Au!";
    }
}

function Gato(nome, idade, cor, preco) {
    Animal.call(this, nome, "Gato", idade, cor, preco);
    this.EmitirSom = function() {
        return "Miau!";
    }
}

function Passaro(nome, idade, cor, preco) {
    Animal.call(this, nome, "Passaro", idade, cor, preco);
    this.EmitirSom = function () {
        return "Piu Piu!";
    };
}

// 3 - Criando instâncias de objetos
const Animal_01 = new Cachorro("Rex", 5, "branco", 2000);
const Animal_02 = new Gato("Mimi", 3, "preto", 200);
const Animal_03 = new Passaro("Fenix", 2, "amarelo", 4000);

// Testando os objetos
console.log(Animal_01.Descricao());
console.log(`Som do ${Animal_01.nome}: ${Animal_01.EmitirSom()}`);

console.log(Animal_02.Descricao());
console.log(`Som da ${Animal_02.nome}: ${Animal_02.EmitirSom()}`);

console.log(Animal_03.Descricao());
console.log(`Som do ${Animal_03.nome}: ${Animal_03.EmitirSom()}`);