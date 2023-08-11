import '../styles/Footer.css';
import imgLinkedInWhite from '../images/linkedinWhite.png';
import imgGitHubWhite from '../images/githubWhite.png';
import imgInstaWhite from '../images/instagramWhite.png';

function Footer() {
  return (
    <footer id="footer-Foo">
      <div id="div-footer">
        <h2 id="title-contact">Entre em contato comigo</h2>

        <div className="redes-footer">
          <a href="https://www.linkedin.com/in/thiago-manhaes/" target="_blank" rel="noreferrer">
            <img className="img-redes" src={ imgLinkedInWhite } alt="ícone LinkedIn" />
          </a>
          <a href="https://github.com/othiagomanhaes" target="_blank" rel="noreferrer">
            <img className="img-redes" src={ imgGitHubWhite } alt="ícone Github" />
          </a>
          <a href="https://www.instagram.com/othiagomanhaes/" target="_blank" rel="noreferrer">
            <img className="img-redes" src={ imgInstaWhite } alt="ícone Instagram" />
          </a>
          <p id="email-id">othiagomanhaes@gmail.com</p>
        </div>
        <p id="msg-final">{"Criado e Desenvolvido com carinho e código por Thiago Manhães =)"}</p>
      </div>
    </footer>
  );
}

export default Footer;
