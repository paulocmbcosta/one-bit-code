let primeiroNome = prompt("Insira seu primeiro nome:");
let segundoNome = prompt("Insira seu segundo nome:");
let campoEstudo = prompt("Insira seu campo de estudos:");
let anoNascimento = parseInt(window.prompt("Insira o ano do seu nascimento:"));
let idade = 2022 - anoNascimento;
document.write("Nome Completo: " + primeiroNome + " " + segundoNome + "<br>");
document.write(" Campo de estudos: " + campoEstudo + "<br>");
document.write("Idade: " + idade);

