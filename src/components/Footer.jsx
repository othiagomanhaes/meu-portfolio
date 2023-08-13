import '../styles/Footer.css';
import imgLinkedInWhite from '../images/linkedinWhite.png';
import imgLinkedInBlack from '../images/linkedinBlack.png';
import imgGitHubWhite from '../images/githubWhite.png';
import imgGitHubBlack from '../images/githubBlack.png';
import imgInstaWhite from '../images/instagramWhite.png';
import imgInstaBlack from '../images/instagramBlack.png';
import { useContext } from 'react';
import ThemeContext from '../Context/themeContext';

function Footer() {
  const { isDark } = useContext(ThemeContext);
  return (
    <footer id={ isDark ? "footer-Foo-black" : "footer-Foo"}>
      <div id="div-footer">
        <h2 id={ isDark ? "title-contact-black" : "title-contact"}>Entre em contato comigo</h2>

        <div className="redes-footer">
          <a href="https://www.linkedin.com/in/thiago-manhaes/" target="_blank" rel="noreferrer">
            <img className="img-redes" src={ isDark ? imgLinkedInWhite : imgLinkedInBlack } alt="ícone LinkedIn" />
          </a>
          <a href="https://github.com/othiagomanhaes" target="_blank" rel="noreferrer">
            <img className="img-redes" src={ isDark ? imgGitHubWhite : imgGitHubBlack } alt="ícone Github" />
          </a>
          <a href="https://www.instagram.com/othiagomanhaes/" target="_blank" rel="noreferrer">
            <img className="img-redes" src={ isDark ? imgInstaWhite : imgInstaBlack } alt="ícone Instagram" />
          </a>
          <p id={ isDark ? "email-id-black" : "email-id" }>othiagomanhaes@gmail.com</p>
        </div>
        <p id={ isDark ? "msg-final-black" : "msg-final"}>{"Criado e Desenvolvido com carinho e código por Thiago Manhães =)"}</p>
      </div>
    </footer>
  );
}

export default Footer;
