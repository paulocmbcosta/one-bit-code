const imoveis = []
let option = ""

do {
  option = prompt(
    "Imóveis cadastrados: " + imoveis.length + "\n" +
    "\nEcolha uma ação:" +
    "\n1 - Adicionar um imóvel" +
    "\n2 - Consultar imóveis cadastrados" +
    "\n3 - Sair" );

    switch (option) {
      case "1":
        const imovel = {}
        imovel.nome = prompt("Insira o nome do proprietário:")
        imovel.quartos = prompt("Insira quantos quartos:")
        imovel.banheiro = prompt("Insira quantos banheiros:")
        imovel.garagem = prompt("Possui garagem? Sim/Não")

        const confimarcao = confirm(
          "Salvar este imóvel? \n" +
          "\nProprietário: " + imovel.nome + 
          "\nQuartos: " + imovel.quartos + 
          "\nBanheiros: " + imovel.banheiro + 
          "\nPossui garagem? " + imovel.garagem
        )

        if (confimarcao) {
          imoveis.push(imovel)
          alert("Imóvel salvo com sucesso")
        } else {
          alert("Voltando para o menu")
        }
        break
      case "2":
        for (let i = 0; i < imoveis.length; i++) {
          alert(
            "Imóvel " + (i + 1) +
            "\nProprietário: " + imoveis[i].nome + 
            "\nQuartos: " + imoveis[i].quartos +
            "\nBanheiros: " + imoveis[i].banheiro +
            "\nGaragem? " + imoveis[i].garagem
          )
        }
        break
      case "3":
        alert("Finalizando...")
        break
      default:
        alert("Escolha uma opção válida!")  
    }

} while (option !== "3")











/*let option = "";

do {
  const imoveis = {};
  
  option = prompt(
    "Imóveis cadastrados: " + imoveis.length + "\n" +
    "\nEcolha uma ação:" +
    "\n1 - Adicionar um imóvel" +
    "\n2 - Consultar imóveis cadastrados" +
    "\n3 - Sair" );

    switch (option) {
      case "1":
        imoveis.nome = prompt("Insira o nome do proprietário:")
        imoveis.quartos = prompt("Insira quantos quartos:")
        imoveis.banheiro = prompt("Insira quantos banheiros:")
        imoveis.garagem = prompt("Possui garagem? Sim/Não")
        break
      case "2":
        alert(imoveis)
        break
      case "3":
        alert("Finalizando...")
        break
      default:
        alert("Escolha uma opção válida!")  
    }

} while (option !== "3")
*/