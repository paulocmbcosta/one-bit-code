let caixa = 0;
let menu = 0;

let adiciona = 0;
let remove = 0;

caixa = parseFloat(prompt("Digite o valor disponível:"));

do {
  menu = parseFloat(prompt("Seu saldo é de: R$ " + caixa + ". Escolha uma das opções abaixo: " +
  "\n 1 - Adicionar valor" +
  "\n 2 - Remover valor" +
  "\n 3 - Sair"));
  switch (menu) {
    case 1:
      adiciona = parseFloat(prompt("Digite o valor para ser adicionado:"));
      caixa = adiciona + caixa;
      break;
    case 2:
      remove = parseFloat(prompt("Digite o valor para ser removido:"));
      caixa = caixa - remove;
      break
    case 3: 
      alert("Obrigado!")
      break
    default:
      alert("Digite um valor válido")
  }

} while (menu !== 3)