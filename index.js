class heroi {
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    
    atacar() {
        let ataque
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }
        console.log(`O herói ${this.nome} atacou usando ${ataque}`);

}}

let heroi1 = new heroi ("Duda", 23, "mago")

heroi1.atacar()



