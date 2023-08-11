import trybetunes from '../images/trybetunes-video.gif';
import linkWhite from '../images/linkExternoWhite.png';
import imgGithubWhite from '../images/githubWhite.png'
import trunfoHerois from '../images/trunfo-herois.gif';

const projects = [
  {
    imagem: trybetunes,
    titulo: 'Trybetunes',
    linkAlive: 'https://othiagomanhaes.github.io/trybetunes/',
    imgLink: linkWhite,
    linkGithub: 'https://github.com/othiagomanhaes/trybetunes',
    imgGithub: imgGithubWhite,
    texto: 'Uma apliacação em React com chamada a API da Apple para buscar artistas e albuns. Também se pode escutar a prévia de suas musicas e favoritá-las.',
  },
  
  {
    imagem: trunfoHerois,
    titulo: 'Tryunfo DC',
    linkAlive: 'https://othiagomanhaes.github.io/trunfo-herois-dc/',
    imgLink: linkWhite,
    linkGithub: 'https://github.com/othiagomanhaes/trunfo-herois-dc',
    imgGithub: imgGithubWhite,
    texto: 'Uma aplicação que manipula estados no React com componentes de classe. Usando Forms e fazendo a réplica do jogo de cartas com tema Herois DC.',
  },
];

export default projects;
