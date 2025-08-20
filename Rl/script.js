lista = [];

const personagem1 = {
    nome: "Steve Rogers",
    codinome: "Capitao America",
    armaPrincipal: "Escudo",
    armaSecundaria: "",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function () {
        return (
            "Nome do personagem: " +
            this.nome +
            "\n" +
            "Codinome " +
            this.codinome +
            "\n" +
            "Arma Principal " +
            this.armaPrincipal +
            "\n" +
            "Arma secundaria " +
            this.armaSecundaria +
            "\n" +
            "Nivel de força " +
            this.forca +
            "\n" +
            "Nivel de velocidade " +
            this.velocidade +
            "\n" +
            "Nivel de resistencia " +
            this.resistencia +
            "\n"
        );
    },
};

const personagem2 = {
    nome: "Bruce banner",
    codinome: "Hulk",
    armaPrincipal: "Super forte",
    armaSecundaria: "",
    velocidade: 80,
    forca: 160,
    resistencia: 140,
    descricao: function () {
        return (
            "Nome do personagem: " +
            this.nome +
            "\n" +
            "Codinome " +
            this.codinome +
            "\n" +
            "Arma Principal " +
            this.armaPrincipal +
            "\n" +
            "Arma secundaria " +
            this.armaSecundaria +
            "\n" +
            "Nivel de força " +
            this.forca +
            "\n" +
            "Nivel de velocidade " +
            this.velocidade +
            "\n" +
            "Nivel de resistencia " +
            this.resistencia +
            "\n"
        );
    },
};

const personagem3 = {
    nome: "Peter Park",
    codinome: "Homem Aranha",
    armaPrincipal: "Lança teias",
    armaSecundaria: "Escala paredes",
    velocidade: 90,
    forca: 70,
    resistencia: 80,
    descricao: function () {
        return (
            "Nome do personagem: " +
            this.nome +
            "\n" +
            "Codinome " +
            this.codinome +
            "\n" +
            "Arma Principal " +
            this.armaPrincipal +
            "\n" +
            "Arma secundaria " +
            this.armaSecundaria +
            "\n" +
            "Nivel de força " +
            this.forca +
            "\n" +
            "Nivel de velocidade " +
            this.velocidade +
            "\n" +
            "Nivel de resistencia " +
            this.resistencia +
            "\n"
        );
    },
};

const personagem4 = {
    nome: "Tony Stark",
    codinome: "Homem de ferro",
    armaPrincipal: "Armadura de ferro",
    armaSecundaria: "Lançador de misseis",
    velocidade: 150,
    forca: 80,
    resistencia: 90,
    descricao: function () {
        return (
            "Nome do personagem: " +
            this.nome +
            "\n" +
            "Codinome " +
            this.codinome +
            "\n" +
            "Arma Principal " +
            this.armaPrincipal +
            "\n" +
            "Arma secundaria " +
            this.armaSecundaria +
            "\n" +
            "Nivel de força " +
            this.forca +
            "\n" +
            "Nivel de velocidade " +
            this.velocidade +
            "\n" +
            "Nivel de resistencia " +
            this.resistencia +
            "\n"
        );
    },
};

const personagem5 = {
    nome: "Thanos",
    codinome: "Thanos",
    armaPrincipal: "Joias do infinito",
    armaSecundaria: "",
    velocidade: 70,
    forca: 110,
    resistencia: 140,
    descricao: function () {
        return (
            "Nome do personagem: " +
            this.nome +
            "\n" +
            "Codinome " +
            this.codinome +
            "\n" +
            "Arma Principal " +
            this.armaPrincipal +
            "\n" +
            "Arma secundaria " +
            this.armaSecundaria +
            "\n" +
            "Nivel de força " +
            this.forca +
            "\n" +
            "Nivel de velocidade " +
            this.velocidade +
            "\n" +
            "Nivel de resistencia " +
            this.resistencia +
            "\n"
        );
    },
};

const personagem6 = {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Mjolnir",
    armaSecundaria: "",
    velocidade: 100,
    forca: 100,
    resistencia: 70,
    descricao: function () {
        return (
            "Nome do personagem: " +
            this.nome +
            "\n" +
            "Codinome " +
            this.codinome +
            "\n" +
            "Arma Principal " +
            this.armaPrincipal +
            "\n" +
            "Arma secundaria " +
            this.armaSecundaria +
            "\n" +
            "Nivel de força " +
            this.forca +
            "\n" +
            "Nivel de velocidade " +
            this.velocidade +
            "\n" +
            "Nivel de resistencia " +
            this.resistencia +
            "\n"
        );
    },
};

const personagem7 = {
    nome: "Stephen Vincent Strange",
    codinome: "Doutor estranho",
    armaPrincipal: "Feitiços",
    armaSecundaria: "",
    velocidade: 80,
    forca: 110,
    resistencia: 80,
    descricao: function () {
        return (
            "Nome do personagem: " +
            this.nome +
            "\n" +
            "Codinome " +
            this.codinome +
            "\n" +
            "Arma Principal " +
            this.armaPrincipal +
            "\n" +
            "Arma secundaria " +
            this.armaSecundaria +
            "\n" +
            "Nivel de força " +
            this.forca +
            "\n" +
            "Nivel de velocidade " +
            this.velocidade +
            "\n" +
            "Nivel de resistencia " +
            this.resistencia +
            "\n"
        );
    },
};

let maiorForca = [];
let maiorResistencia = [];
let maiorVelocidade = [];

lista.push(
    personagem1,
    personagem2,
    personagem3,
    personagem4,
    personagem5,
    personagem6,
    personagem7
);

lista.forEach((element) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == element) {
            continue;
        }

        if (lista[i].forca > element.forca) {
            maiorForca.push(lista[i].codinome);
        }
        if (lista[i].resistencia > element.resistencia) {
            maiorResistencia.push(lista[i].codinome);
        }
        if (lista[i].velocidade > element.velocidade) {
            maiorVelocidade.push(lista[i].codinome);
        }
    }
    
    console.log(element.descricao() + "\n" + "Personagens mais fortes que o " + element.codinome + ": " + maiorForca.join() + "\n" + "Personagens mais velozes que o " + element.codinome + ": " + maiorVelocidade.join() + "\n" + "Personagens mais resistentes que o " + element.codinome + ": " + maiorResistencia.join() + "\n")

    maiorForca = [], maiorResistencia= [], maiorVelocidade = []
});
