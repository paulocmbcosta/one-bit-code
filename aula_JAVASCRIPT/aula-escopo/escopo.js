//let pokemon = "Charmander"

//function evoluir() {
//  pokemon = "Charmaleon"
//}

//console.log(pokemon)
//evoluir()
//console.log(pokemon)

//function criaAnimal () {
//  let animal = "Gato"
//}

//criaAnimal()
//console.log(animal)

function avaliarNota(nota) {
  if(nota > 60) {
    var aprovado = true
    let situacao = "Aprovado"
  } else {
    var aprovado = false
    let situacao = "Reprovado"
  }

  console.log(nota)
  console.log(aprovado)
  console.log(situacao)
}

avaliarNota(83)
avaliarNota(49)