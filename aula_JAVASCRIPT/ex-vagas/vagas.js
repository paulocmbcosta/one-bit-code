let option = 0;
const vagas = []

function boasVindas() {
  option = parseInt(prompt(
    "Bem vindo ao sistema de cadastro de vagas! \nEscolha uma das opções abaixo: \n" +
    "\n1 - Listar vagas disponíveis" + 
    "\n2 - Criar uma nova vaga" +
    "\n3 - Visualizar uma vaga" +
    "\n4 - Inscrever um candidato em uma vaga" +
    "\n5 - Excluir uma vaga" +
    "\n6 - Sair" 
  ))
}

function listarVagas() {
  let  vagasDisponiveis = ""
  for (let i = 0; i < vagas.length; i++) {
    vagasDisponiveis += 
    "\nVaga: " + (i + 1) + 
    "\nNome: " + vagas[i].descricao + 
    "\nQuantidade de Candidatos: " + vagas.length   
  }
  alert(vagasDisponiveis)
}

function criaVaga() {
  const novaVaga = {}
  novaVaga.nome = prompt("Digite o nome para a vaga:")
  novaVaga.descricao = prompt("Digite a descrição para a vaga:")
  novaVaga.dataLimite = prompt("Digite a data limite para a vaga:")

  const confimarcao = confirm(
    "Salvar esta vaga? \n" +
    "\nNome: " + novaVaga.nome +
    "\nDescrição: " + novaVaga.descricao +
    "\nData limite: " + novaVaga.dataLimite 
  )

  if (confimarcao) {
    vagas.push(novaVaga)
    alert("Vaga cadastrada com sucesso")
  } else {
    alert("Voltando para o menu")
  }
}

do {
  boasVindas();

  switch (option) {
    case 1:
      listarVagas()
      break
    case 2:
      criaVaga()
      break
    case 3:
      break
    case 4:
      break
    case 5:
      break
    case 6:
      alert("Encerrando o sistema")
      break
    default:
      alert("Digite uma opção válida")            
  }

} while (option !== 6)

console.log(vagas)