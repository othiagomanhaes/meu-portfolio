import { Link } from 'react-router-dom';
import tmIcon from '../images/tmHeader.png'
import imgGitHub from '../images/img-Github.png'
import imgLinkedIn from '../images/img-LinkedIn.png'
import '../styles/Header.css'

function Header() {
  return (
    <section id="section-1-header">
      <img id="iconeTM" src={ tmIcon } alt="iconeTM" />
      <nav id="nav-header">
        <ul id="list-links">
          <li>
            <Link className="li-links" to="/meu-portfolio">Início</Link>
          </li>
          <li>
            <Link className="li-links" to="/meu-portfolio/abouteMe">Sobre mim</Link>
          </li>
          <li>
            <Link className="li-links" to="/meu-portfolio/skills">Habilidades</Link>
          </li>
          <li>
            <Link className="li-links" to="/meu-portfolio/projects">Projetos</Link>
          </li>
        </ul>
      </nav>
      <div id="div-botoes">
        <a href="https://github.com/othiagomanhaes" target="_blank" id="a-github" rel="noreferrer">
          <button id="btn-gitHub" type="button">
            <img src={ imgGitHub } alt="ícone Github" />
            Github
          </button>
        </a>
        <a href="https://www.linkedin.com/in/thiago-manhaes/" target="_blank" id="a-linkedin" rel="noreferrer">
          <button id="btn-linkedIn" type="button">
            <img src={ imgLinkedIn } alt="ícone LinkedIn" />
            LinkedIn
          </button>
        </a>
      </div>
    </section>
  )
}

export default Header;
