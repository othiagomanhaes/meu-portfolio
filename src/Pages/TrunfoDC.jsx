import '../styles/TrunfoDc.css';

function TrunfoDC() {
  return (
    <div id="div-mae-trunfo">
      <div id="div-trunfo-page">
        <h3 id="title-trunfo">Trunfo Herois DC</h3>
        <p id="texto-trunfo-1">
          Este projeto foi desenvolvido como parte da graduação do módulo de Front-End da Trybe. A Trybe é uma escola de graduação Full Stack Developer que ensina na prática com diversos projetos e capacitando os alunos para o mercado de trabalho visando o aprimoramento e dsenvolvimento das HardSkills e SoftSkills.
        </p>

        <p id="texto-trunfo-2">
          O Trunfo Herois DC é um aplicativo web desenvolvido com React utilizando o conceito de classes para construir seus componentes. Eu usei o estado do componente para controlar os campos de entrada do formulário. Coloquei também uma lista de heróis pré definida para que o usuário entre na página com um baralho, mas caso o usuário faça alguma açteração, tudo será salvo no LocalStorage.
        </p>

        <p id="texto-trunfo-3">
          O Trunfo Herois DC é um tipo de réplica do jogo super trunfo onde o objetivo é você comparar suas cartas com o seu adversário para ver quem tem o melhor atributo e ganhar o duelo. Cada carta tem três atributos, Força,  Poder e Inteligência. A soma dos três não pode ser superior a 210 pontos. Cada atributo não pode ter pontuação negativa e nem ser superior a 90 pontos. O campo descrição não pode ter mais de 60 caracteres. O campo imagem tem que ser um link para personalizar a imagem desejada. No rodapé do Trunfo Herois DC você poderá acessar a API utilizada para buscar mais imagens do mesmo padrão utilizada para confeccionar as primeiras cartas.
        </p>

        <h4 id="texto-clique">Clique na imagem a baixo e veja ao vivo!</h4>
        <div id="div-to-heroi">
          <a id="link-to-heroi" href="https://othiagomanhaes.github.io/trunfo-herois-dc/" target="_blank" rel="noreferrer">
            <img id="img-herois" src="https://i.pinimg.com/564x/93/ba/69/93ba69647799767cf4b5d884d0237732.jpg" alt="herois dc" />
          </a>
        </div>

        <footer id="footer-heroi">{"Criado e desenvolvido por Thiago Manhães =) test"}</footer>
      </div>
    </div>
  )
}

export default TrunfoDC;
