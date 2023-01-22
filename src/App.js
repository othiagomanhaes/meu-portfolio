import AboutPage from './Pages/AboutPage';
import { Route, Switch, Link } from 'react-router-dom';
import SkillsPage from './Pages/SkillsPage';
import ProjectsPage from './Pages/ProjectsPage';
import MainPage from './Pages/MainPage';
import TrunfoDC from './Pages/TrunfoDC';
import './App.css';
import tmIcon from './images/tmHeader.png';
import imgGitHub from './images/img-Github.png';
import imgLinkedIn from './images/img-LinkedIn.png';

function App() {
  return (
    <div>
      <section id="section-1-header">
        <img id="iconeTM" src={ tmIcon } alt="iconeTM" />
        <nav id="nav-header">
          <ul id="list-links">
            <li>
              <Link className="li-links" to="/meu-portfolio">Início</Link>
            </li>
            <li>
              {/* <a href="#section-SobreMim" rel="about me">Sobre mim</a> */}
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
      <Switch>
        <Route exact path="/meu-portfolio" component={ MainPage }/>
        <Route path="/meu-portfolio/abouteMe" component={ AboutPage } />
        <Route path="/meu-portfolio/skills" component={ SkillsPage }/>
        <Route path="/meu-portfolio/projects" component={ ProjectsPage }/>
        <Route path="/projects/trunfo-herois-dc" component={ TrunfoDC }/>
      </Switch>
    </div>
  );
}

export default App;
