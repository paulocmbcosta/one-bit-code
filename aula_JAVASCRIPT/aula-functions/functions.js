
function muitosParametros(nome, telefone, endereço, aniversario, email, senha) {
  //...
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

function objetoComoParametro(usuario) {
  usuario.nome
  usuario.telefone
  usuario.endereco
  usuario.aniversario
  usuario.email
  usuario.senha

  console.log(usuario)
}

const dadosUsuario = {
  nome: "Paulo Cesar",
  telefone: "61 99541 6625",
  endereco: "Goias",
  aniversario: "09/10/1984",
  email: "paulo@email.com.br",
  senha: "102030"
}

objetoComoParametro(dadosUsuario)