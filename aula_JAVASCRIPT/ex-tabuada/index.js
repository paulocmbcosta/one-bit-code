let number = parseInt(prompt("Digite o número desejado:"))

let resultado = "" 

for ( let i = 1; i <= 20; i++) {
  resultado += " -> " + number + " x " + i + " = " + (number * i) + "\n"
}

alert("Resultado da tabuada de " + number + ":\n\n" + resultado)

