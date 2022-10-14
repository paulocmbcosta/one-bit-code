let pessoa = {
  nome: "Paulo",
  idade: 38,
  dizerOla () {
    console.log("Olá, mundo!!! Meu nome é " + this.nome )
  }
}

pessoa.dizerOla()