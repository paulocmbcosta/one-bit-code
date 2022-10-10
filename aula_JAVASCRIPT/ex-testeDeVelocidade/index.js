const car1 = prompt("Insira o modelo do primeiro carro:");
const speed1 = parseFloat(prompt("Insrira a velocidade do primeiro carro:"));
const car2 = prompt("Insira o modelo do segundo carro:");
const speed2 = parseFloat(prompt("Insrira a velocidade do segundo carro:"));

if (speed1 > speed2) {
  alert("O carro " + car1 + " é mais rápido");
} else if (speed1 < speed2) { 
  alert("O carro " + car2 + " é mais rápido");
} else {
  alert("Os dois carros tem a mesma velocidade");
}

