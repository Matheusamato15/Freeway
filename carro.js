//variaveis com lista de carros
let yCarros = [40, 96, 150, 210, 270, 318]; //posição y dos carros no canvas
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3]; // velocidade dos carros
let xCarros = [600, 600, 600, 600, 600, 600]; //posição x dos carros no canvas
let comprimentoCarro = 50; // comprimento dos carros
let alturaCarro = 40; // altura dos carros

function mostraCarro() {
  //mostrar o carro no canvas
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro
    );
  }
}

function movimentaCarro() {
  // velocidade do carro no canvas
  for (let i = 0; i < velocidadeCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro() {
  //movimentar carros infinitos no canvas
  for (let i = 0; i < xCarros.length; i++) {
    if (carroPassou(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function carroPassou(xCarro) {
  //verifica se carro passou por toda a tela
  return xCarro < -50;
}
