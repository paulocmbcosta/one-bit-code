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
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")

  alert(vagasEmTexto)
}


function novaVaga() {
  const nome = prompt("Informe um nome para a vaga:")
  const descricao = prompt("Informe um descrição para a vaga:")
  const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
  )

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert("Vaga criada.")
  }
}


function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir:")
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
  return textoFinal + "\n - " + candidato
 }, "") 

    

  alert(
    "Vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.candidatos.length +
    "\nCandidatos inscritos:" + candidatosEmTexto
  )
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):")
  const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert("Inscrição realizada")
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vagas.splice(indice, 1)
    alert("Vaga excluída.")
  }
}

do {
  boasVindas();

  switch (option) {
    case 1:
      listarVagas()
      break
    case 2:
      novaVaga()
      break
    case 3:
      exibirVaga()
      break
    case 4:
      inscreverCandidato()
      break
    case 5:
      excluirVaga()
      break
    case 6:
      alert("Encerrando o sistema")
      break
    default:
      alert("Digite uma opção válida")            
  }

} while (option !== 6)

console.log(vagas)