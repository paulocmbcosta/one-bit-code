const pers1 = prompt("Insira o nome do lutador:");
const poderAtaque = parseFloat(prompt("Insira o poder de ataque do " + pers1));

const pers2 = prompt("Insira o nome do segundo lutador:");
const life = parseFloat(prompt("Insira os postos de vida do lutador : " + pers2));
const defense = parseFloat(prompt("Insira o poder de defesa do lutado: " + pers2));
const escudo = prompt("O lutador " + pers2 + " possui escudo? SIM ou NÃO");

let dano = 0

if (poderAtaque > defense && escudo === "NÃO") {
  dano = poderAtaque - defense;  
} else if (poderAtaque > defense && escudo === "SIM") {
  dano = (poderAtaque - defense) /2
} else if (poderAtaque <= defense) {
  dano = 0
}

document.write("O dano causado foi de: " + dano + "<br>");
if (dano >= life) {
  document.write("o lutador: " + pers2 + " morreu!")
} else {
  document.write("O lutador: " + pers2 + " sobreviveu!!!")
}


