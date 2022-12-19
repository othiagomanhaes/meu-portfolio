import AboutMe from './components/AboutMe';
import { Route, Switch, Link } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MainPage from './Pages/MainPage';
import './App.css';
import tmIcon from './images/tmHeader.png';

function App() {
  return (
    <div>
      <section id="section-1-header">
        <img id="iconeTM" src={ tmIcon } alt="iconeTM" />
        <nav id="nav-header">
          <ul id="list-links">
            <li>
              <Link class="li-links" to="/meu-portfolio">Início</Link>
            </li>
            <li>
              <Link class="li-links" to="/meu-portfolio/abouteMe">Sobre mim</Link>
            </li>
            <li>
              <Link class="li-links" to="/meu-portfolio/skills">Habilidades</Link>
            </li>
            <li>
              <Link class="li-links" to="/meu-portfolio/projects">Projetos</Link>
            </li>
          </ul>
        </nav>
      </section>
      <Switch>
        <Route exact path="/meu-portfolio" component={ MainPage }/>
        <Route path="/meu-portfolio/abouteMe" component={ AboutMe } />
        <Route path="/meu-portfolio/skills" component={ Skills }/>
        <Route path="/meu-portfolio/projects" component={ Projects }/>
      </Switch>
    </div>
  );
}

export default App;
