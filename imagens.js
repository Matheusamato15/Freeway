//variaveis de imagens e sons do jogo
let imagemDaEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//variáveis sons
let somTrilha;
let somColisao;
let somPonto;

function preload() {
  imagemDaEstrada = loadImage("zimagens/estrada.png");
  imagemAtor = loadImage("zimagens/ator-1.png");
  imagemCarro = loadImage("zimagens/carro-1.png");
  imagemCarro2 = loadImage("zimagens/carro-2.png");
  imagemCarro3 = loadImage("zimagens/carro-3.png");
  imagemCarros = [
    imagemCarro,
    imagemCarro2,
    imagemCarro3,
    imagemCarro,
    imagemCarro2,
    imagemCarro3,
  ];

  somTrilha = loadSound("zsons/trilha.mp3");
  somColisao = loadSound("zsons/colidiu.mp3");
  somPonto = loadSound("zsons/pontos.wav");
}
