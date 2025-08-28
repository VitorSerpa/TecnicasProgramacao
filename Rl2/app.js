function Telefone(ddd, telefone) {
    (this.ddd = ddd), (this.telefone = telefone);

    this.getDDD = function () {
        return this.ddd;
    };

    this.getDDDLowerCase = function () {
        return this.ddd.toLowerCase();
    };

    this.getDDDUpperCase = function () {
        return this.ddd.toUpperCase();
    };

    this.getTelefone = function () {
        return this.telefone;
    };

    this.getTelefoneLowerCase = function () {
        return this.telefone.toLowerCase();
    };

    this.getTelefoneUpperCase = function () {
        return this.telefone.toUpperCase();
    };

    this.setDDD = function (ddd) {
        this.ddd = ddd;
    };

    this.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    this.getEstado = function () {
        return this.estado;
    };

    this.getEstadoLowerCase = function () {
        return this.estado.toLowerCase();
    };

    this.getEstadoUpperCase = function () {
        return this.estado.toUpperCase();
    };

    this.getCidade = function () {
        return this.cidade;
    };

    this.getCidadeLowerCase = function () {
        return this.cidade.toLowerCase();
    };

    this.getCidadeUpperCase = function () {
        return this.cidade.toUpperCase();
    };

    this.getRua = function () {
        return this.rua;
    };

    this.getRuaLowerCase = function () {
        return this.rua.toLowerCase();
    };

    this.getRuaUpperCase = function () {
        return this.rua.toUpperCase();
    };

    this.getNumero = function () {
        return this.numero;
    };

    this.getNumeroLowerCase = function () {
        return this.numero.toLowerCase();
    };

    this.getNumeroUpperCase = function () {
        return this.numero.toUpperCase();
    };

    this.setEstado = function (estado) {
        this.estado = estado;
    };

    this.setCidade = function (cidade) {
        this.cidade = cidade;
    };

    this.setNumero = function (numero) {
        this.numero = numero;
    };

    this.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
}

function Cliente(nome, telefone, email, endereco) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;

    this.getNome = function () {
        return this.nome;
    };

    this.getNomeLowerCase = function () {
        return this.nome.toLowerCase();
    };

    this.getNomeUpperCase = function () {
        return this.nome.toUpperCase();
    };

    this.getEmail = function () {
        return this.email;
    };

    this.getEmailLowerCase = function () {
        return this.email.toLowerCase();
    };

    this.getEmailUpperCase = function () {
        return this.email.toUpperCase();
    };

    this.setNome = function (nome) {
        this.nome = nome;
    };

    this.setTelefone = function (telefone) {
        this.telefone = telefone;
    };

    this.setEmail = function (email) {
        this.email = email;
    };

    this.setEndereco = function (endereco) {
        this.endereco = endereco;
    };

    this.descricao = function () {
        return str = `
        ------------------------------
            Informações do Cliente:
            ${this.nome}
        ------------------------------
            Telefone:
            DDD: ${this.telefone.getDDD()}
            Número: ${this.telefone.getTelefone()}
        ------------------------------
            Endereço:
            Rua: ${this.endereco.getRua()}
            Número: ${this.endereco.getNumero()}
            Cidade: ${this.endereco.getCidade()}
            Estado: ${this.endereco.getEstado()}
        ------------------------------
        `;
    };
}

const listaClientes = [];

function ordenarClientes(listaClientes) {
    listaClientes.sort((a, b) => {
        const nomeA = a.nome.toLowerCase();
        const nomeB = b.nome.toLowerCase();

        if (nomeA < nomeB) return -1;
        if (nomeA > nomeB) return 1;
        return 0;
    });
}

function criarCliente(cliente) {
    listaClientes.push(cliente);
}

const telefone1 = new Telefone("12", "981312111");
const telefone2 = new Telefone("12", "988335498");
const telefone3 = new Telefone("12", "988784251");

const endereco1 = new Endereco(
    "SP",
    "São José dos Campos",
    "Rua Capitao Alipio",
    "84"
);
const endereco2 = new Endereco(
    "SP",
    "São José dos Campos",
    "Rua Frutal",
    "414"
);
const endereco3 = new Endereco("SP", "São José dos Campos", "Praça Chui", "34");

criarCliente(
    new Cliente("Citor Serpa", telefone1, "vitorserpa123@gmail.com", endereco1)
);
criarCliente(
    new Cliente("Aeandro Rodolfo", telefone2, "leandro123@gmail.com", endereco2)
);
criarCliente(
    new Cliente("Bose Vivaldo", telefone3, "josevivaldo@gmail.com", endereco3)
);

ordenarClientes(listaClientes)

listaClientes.forEach((element) => {
    console.log(element.descricao())
})