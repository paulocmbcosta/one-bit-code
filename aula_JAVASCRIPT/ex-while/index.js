let name = prompt("Digite seu nome:");
let yesNo = prompt("Já visitou alguma cidade? (Sim/Não)");

let cidades = "";
let contagem = 0;

while (yesNo === "Sim") {
  let city = prompt("Digite o nome da cidade que visitou:");
  cidades += " - " + city + "\n"
  yesNo = prompt("Visitou mais alguma cidade?");
  contagem++
}

if (contagem > 1) {
  alert(name + " , você visitou: " + contagem + " cidades." + 
  "\n As cidades são: " + 
  "\n" + cidades);
} else {
  alert("Obrigado!!!");
}

console.log(city);