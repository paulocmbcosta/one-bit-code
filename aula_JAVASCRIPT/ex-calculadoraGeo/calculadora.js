let value = 0;
let option = "";

function triangulo(a, b) {
  return areaTri = (a * b) / 2
}

function retangulo(a, b) {
  return areaRet = a * b
}

function quadrado(a) {
  return areaLado = a ** 2
}

function trapezio(a, b, c) {
  return areaTrapezio = (a + b) * c / 2
}

do {
  option = prompt("Calculadora geométrica. Escolha uma das opções abaixo: \n" +
  "\n1 - Área do triângulo" +
  "\n2 - Área do retângulo" +
  "\n3 - Área do quadrado" +
  "\n4 - Área do trapézio" +
  "\n5 - Área do circulo" +
  "\n6 - Sair"
  )

  switch (option) {
    case "1":
      let base1 = prompt("Digite o valor da base:")
      let altura1 = prompt("Digite o valor da altura")
      triangulo(base1, altura1)
      alert("O resultado do triângulo é: " + areaTri)
      break
    case "2":
      let base2 = prompt("Digite o valor da base:")
      let altura2 = prompt("Digite o valor da altura")
      retangulo(base2, altura2)
      alert("O resultado do retângulo é: " + areaRet)
      break
    case "3":
      let ladoA = prompt("Digite o valor do lado de um quadrado:")
      quadrado(ladoA)
      alert("O resultado do quadrado é: " + areaLado)
      break
    case "4":
      let baseMaior = prompt("Digite o valor da base maior:")
      let baseMenor = prompt("Digite o valor da base menor:")
      let altura3 = prompt("Digite o valor da altura:")
      trapezio(baseMaior, baseMenor, altura3)
      alert("O resultado do quadrado é: " + areaTrapezio)
      break
    case "5":
      break
    case "6":
      alert("Encerrando o sistema...")
      break
    default:
      alert("Digite uma opção válida")
  }

} while (option !== "6")