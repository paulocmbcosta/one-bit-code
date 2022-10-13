function calcularMedia(a, b) {
  const media = (a + b) /2
  return media
}

const resultado = calcularMedia(5, 7)
console.log(resultado)


function arearetangular (base, altura) {
  return base * altura 
}

function areaQuadrada (lado) {
  return arearetangular(lado, lado)
}

console.log(areaQuadrada(9))

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade"
  } else {
    return "Menor de Idade"
  }
}

console.log(maioridade(29))
console.log(maioridade(12))