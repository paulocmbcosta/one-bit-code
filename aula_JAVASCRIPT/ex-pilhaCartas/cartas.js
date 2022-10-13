let baralho = [];
let option = "";

do {
  
  option = prompt(
    "Cartas no baralho: " + baralho.length + "\n" +
    "\nEcolha uma ação:" +
    "\n1 - Adicionar uma carta" +
    "\n2 - Puxar uma carta" +
    "\n3 - Sair" );

    switch (option) {
      case "1":
        const novaCarta = prompt("Insira a nova carta:")
        baralho.unshift(novaCarta)
        break
      case "2":
        const cartaPuxada = baralho.shift()
        if (cartaPuxada) {
          alert(cartaPuxada + " foi removida do baralho")
        } else {
          alert("Não há carta para ser puxada")
        }
        break
      case "3":
        alert("Encerrando...")
        break
      default:
        alert("Digite uma opção válida!")
    }

} while (option !== "3")

