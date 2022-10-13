let row = [];
let option = "";

do {
  let = pacientes = ""
  for (let i = 0; i < row.length; i++) {
    pacientes += (i + 1) + "º - " + row[i] + "\n"
  }

  option = prompt(
    "Pacientes: \n" + pacientes +
    "\nEcolha uma ação:" +
    "\n1 - Novo paciente" +
    "\n2 - Consultar paciente" +
    "\n3 - Sair" );

    switch (option) {
      case "1":
        const novoPaciente = prompt("Insira o nome do paciente:")
        row.push(novoPaciente)
        break
      case "2":
        const pacienteConsultado = row.shift()
        if (pacienteConsultado) {
          alert(pacienteConsultado + " foi removido da fila")
        } else {
          alert("Não há paciente na fila")
        }
        break
      case "3":
        alert("Encerrando...")
        break
      default:
        alert("Digite uma opção válida!")
    }

} while (option !== "3")










/*do {
  option = parseInt(prompt("Seja bem vindo! Veja abaixo a fila de atendimento: \n" +
  list +
  "\n Escolha uma das opções abaixo: \n" +
  "\n1 - Novo paciente" +
  "\n2 - Consultar paciente" +
  "\n3 - Sair" ));
  
  switch (option) {
    case 1:
      let adic = prompt("Digite o nomo do nomo paciente:")
      row.push(adic)
      break
    }
    
  } while (option !== 3)
  
  
  for (let indice = 1; indice < row.length; indice++) {
    const elemento = row[indice]
    list += indice + "ª da fila: " + elemento + "\n"
  }
  
  console.log(list)
  */