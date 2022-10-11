const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionar elementos - push (O elemento sempre vai para a ultima posição)
arr.push("Boromir"); // Está função já retorna o tamanho da array atualizado
console.log(arr)

// Adicionar elementos - unshift (O elemento sempre vai para a primeira posição)
arr.unshift("Boromir"); // Está função já retorna o tamanho da array atualizado
console.log(arr)

// Remover Elementos - pop (remove o elemento sempre da ultima posição)
arr.pop(); // Está função já retorna o item que foi removido
console.log(arr)

// Remover elemntos - shift (remove o elemento sempre da primeira posição)
arr.shift(); // Está função já retorna o item que foi removido
console.log(arr)

// Pesquisar por um elemento - includes (pesquisa pela descrição da string)
const inclui = arr.includes("Gandalf") // retorna true ou false
console.log(inclui)

// Pesquisar por um elemento - indexOf (pesquisa e reorna a posição do elemento)
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Função Cortar - slice (Esta função copia um trecho especifico da array e retorna para uamvariável)
const hobbits = arr.slice(0, 4) // neste caso ira copiar os itens de 0 a 3
const outros = arr.slice(-4) // neste caso ira copiar os ultimos itens da lista de trás para frente)
console.log(arr);
console.log(hobbits)
console.log(outros)

// Função Concatenar - concat (esta função concatena uma array com outra)
const sociedade = hobbits.concat(outros, "Boromir") // neste caso ira armazenar na variável "sociedade" os itens da lista hobbits + os itens da lista outros + a string "Boromir"
console.log(sociedade)

// Substituição dos Elementos - splice (Serve para remover um grupo de elementos do array e substituir por outro grupo )
const elementosRemovidos = sociedade.splice(indice, 1, "Gandolf, o Cinzento") // está funão vai encontrar o indice (neste caso é 4), em seguida ira verificar quantos ela precisa excluir apartir deste item que neste caso é 1 e depois vai substituir
// obs.: neste caso a funçaõ splice retorna uma lista dos itens removidos
console.log(elementosRemovidos)
console.log(sociedade)

// Iterar sobre os elementos - 
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição: " + indice)
}
