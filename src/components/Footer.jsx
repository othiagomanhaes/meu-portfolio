import '../styles/Footer.css';
import imgLinkedIn from '../images/img-LinkedIn.png';
import imgGitHub from '../images/img-Github.png';
// import insta from '../images/instagram.png';
import insta2 from '../images/instagram-2.png';

function Footer() {
  return (
    <footer id="footer-Foo">
      <div id="div-footer">
        <h2 id="title-contact">Entre em contato comigo</h2>

        <div className="redes-footer">
          <a href="https://www.linkedin.com/in/thiago-manhaes/" target="_blank" rel="noreferrer">
            <img className="img-redes" src={ imgLinkedIn } alt="ícone LinkedIn" />
          </a>
          <a href="https://github.com/othiagomanhaes" target="_blank" rel="noreferrer">
            <img className="img-redes" src={ imgGitHub } alt="ícone Github" />
          </a>
          <a href="https://www.instagram.com/othiagomanhaes/" target="_blank" rel="noreferrer">
            <img className="img-redes" src={ insta2 } alt="ícone Instagram" />
          </a>
          <p id="email-id">othiagomanhaes@gmail.com</p>
        </div>
        <p id="msg-final">{"Criado e Desenvolvido com carinho e código por Thiago Manhães =)"}</p>
      </div>
    </footer>
  );
}

export default Footer;
