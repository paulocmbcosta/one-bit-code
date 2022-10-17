function addPlayer() {
  const confirmacao = confirm("Tem certeza que deseja escalar este jogador?");

  if (confirmacao) {
    const textPosition = document.getElementById("textPosition").value;
    const textName = document.getElementById("textName").value;
    const textShit = document.getElementById("textShit").value;

    const playerSection = document.getElementById("player-list");

    const ul = document.createElement("ul");

    const playerList = document.createElement("li");
    playerList.innerText =
      "Posição: " +
      textPosition +
      "/ Nome: " +
      textName +
      "/ Camisa: " +
      textShit;

    ul.appendChild(playerList);

    playerSection.append(ul);
  }

  textPosition.value = "";
  textName.value = "";
  textShit.value = "";
  
  console.log(playerList)
  console.log(playerSection)
}

function removePlayer() {
  const playerSection = document.getElementById("player-list");

  const confirmacaoExclusao = confirm("Tem certeza que deseja excluir este jogador?");

  if(confirmacaoExclusao) {
    const excluidoShit = document.getElementById("textShit").value;

    playerSection.removeChild(li[excluidoShit])
  }
}
