//variaveis ator
let yAtor = 366; // posição y do ator
let xAtor = 85; // posição x do ator
let colisao = false; //ator colidindo?
let meusPontos = 0; //pontos do jogador

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (podeMover()) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  // verifica se o ator colidiu com os carros
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      15
    );

    if (colisao) {
      voltaAtorParaInicio();
      somColisao.play();// retorna o ator para o início
      if (pontosMaiorZero()) {
        meusPontos -= 1; // perde pontos se colidir
      }
    }
  }
}

function voltaAtorParaInicio() {
  // retorna o ator para o início
  yAtor = 366;
}

function incluiPontos() {
  // inclusão de pontos por vitória
  textAlign(CENTER);
  textSize(30);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27); // pontos, largura e altura
}

function marcaPonto() {
  // contador de pontos
  if (yAtor < 15) {
    meusPontos += 1;
    somPonto.play();
    voltaAtorParaInicio();
  }
}

function pontosMaiorZero() {
  // função para saber se pontos é maior que zero
  return meusPontos > 0;
}

function podeMover() {
  return yAtor < 366;
}
