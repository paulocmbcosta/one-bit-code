const value = parseFloat(prompt("Digite um valor em metros:"));
const conveter = prompt(
"Para qual unidade de medida o valor deve ser convertido?" + 
"\n - milimetro (mm)" +
"\n - centímetro (cm)" +
"\n - decímetro (dm)" +
"\n - decâmetro (dam)" +
"\n - hectômetro (hm)" +
"\n - quilômetro (km)"
)

const milimetro = value * 1000
const centimetro = value * 100
const decimetro = value * 10
const decametro = value / 10 
const hectometro = value / 100 
const quilômetro = value / 1000 

switch (conveter) {
  case "mm":
    alert("O valor em milimetros é: " + milimetro)
    break
  case "cm":
    alert("O valor em centímetros é: " + centimetro)
    break
  case "dm":
    alert("O valor em decímetro é: " + decimetro)
    break
  case "dam":
    alert("O valor em decâmetro é: " + decametro)
    break
  case "hm":
    alert("O valor em hectômetro é: " + hectometro)
    break
  case "km":
    alert("O valor em quilômetro é: " + quilômetro)
    break
  default:
    alert("Digite um valor válido: mm, cm, dm, dam, hm e km")
}