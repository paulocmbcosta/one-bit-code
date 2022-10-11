let option = 0

do {
  option = parseInt(prompt(
    "Bem vindo ao sistema financeiro, escolha uma das opções abaixo:" +
    "\n 1 - Contas a pagar" + 
    "\n 2 - Contas a receber" +
    "\n 3 - Fluxo de caixa" +
    "\n 4 - Pagamentos" +
    "\n 5 - Encerrar"));
  switch(option) {
    case 1: 
      alert("Opção escolhida: Contas a pagar");
      break
    case 2:
      alert("Opção escolhida: Contas a receber");
      break
    case 3:
      alert("Opção escolhida: Fluxo de caixa");
      break
    case 4:
      alert("Opção escolhida: Pagamentos");
      break
    case 5:
      alert("Encerrando o sistema");
      break
    default:
      alert("Opção inválida");
  }
  
} while (option !== 5)


