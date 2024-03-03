reiniciarJogo();

function verificarChute() {
  let chute = document.querySelector('input').value;
  let chute2 = document.querySelector('input');

  if (chute2.value) {
    if (numeroAleatorio == chute) {
      let tentativa = tentativas > 1 ? "tentativas" : "tentativa"
      alteraTitulo('h1', 'Você ganhou o jogo!!!');
      alteraTitulo('p', `Você acertou o nº ${chute} com ${tentativas} ${tentativa}`)
      document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
      if (numeroAleatorio < chute) {
        alteraTitulo('p', 'Numero aleatório é menor');
      } else {
        alteraTitulo('p', 'Numero aleatório é maior');
      }
    }
    tentativas++;
  }
  limparCampo();
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function alteraTitulo(tag, texto) {
  let seila = document.querySelector(tag);
  seila.innerHTML = texto;
}

function reiniciarJogo() {
  numeroAleatorio = parseInt(Math.random() * 1024 + 1);
  tentativas = 1;
  limparCampo();
  alteraTitulo('h1', "Jogo do número secreto");
  alteraTitulo('p', "Escolha um número entre 1 e 1024");
  document.getElementById('reiniciar').setAttribute('disabled',true);
}
