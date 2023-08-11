import { useContext } from 'react';
import ThemeContext from '../Context/themeContext';
import { Link } from 'react-router-dom';
import tmIcon from '../images/tmHeader.png'
import imgGitHubWhite from '../images/githubWhite.png'
import imgGitHubBlack from '../images/githubBlack.png'
import imgLinkedInWhite from '../images/linkedinWhite.png'
import imgLinkedInBlack from '../images/linkedinBlack.png'
import sunWhite from '../images/sunWhite.png';
import moonBlack from '../images/moonBlack.png'
import '../styles/Header.css'

function Header() {
  const { isDark, changeTheme } = useContext(ThemeContext);
  return (
    <header id={isDark ? "header-header" : "header-header-black"}>
      <div id="div-header">
        <img id="iconeTM" src={ tmIcon } alt="iconeTM" />
        <nav id="nav-header">
          <ul id="list-links">
            <li>
              <Link className={ isDark ? "li-links-black" : "li-links"} to="/meu-portfolio">Início</Link>
            </li>
            <li>
              <Link className={ isDark ? "li-links-black" : "li-links"} to="/meu-portfolio/abouteMe">Sobre mim</Link>
            </li>
            <li>
              <Link className={ isDark ? "li-links-black" : "li-links"} to="/meu-portfolio/skills">Habilidades</Link>
            </li>
            <li>
              <Link className={ isDark ? "li-links-black" : "li-links"} to="/meu-portfolio/projects">Projetos</Link>
            </li>
          </ul>
        </nav>
        <div id="div-botoes">
          <button id="btn-theme" onClick={ changeTheme }>
            <img src={ isDark? sunWhite : moonBlack } alt="sun white" />
          </button>
          <a href="https://github.com/othiagomanhaes" target="_blank" id="a-github" rel="noreferrer">
            <img src={ isDark ? imgGitHubWhite : imgGitHubBlack } alt="ícone Github" />
          </a>
          <a href="https://www.linkedin.com/in/thiago-manhaes/" target="_blank" id="a-linkedin" rel="noreferrer">
            <img src={ isDark ? imgLinkedInWhite : imgLinkedInBlack } alt="ícone LinkedIn" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;
