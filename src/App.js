import AboutMe from './components/AboutMe';
import { Route, Switch, Link } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MainPage from './Pages/MainPage';
import './App.css';

function App() {
  return (
    <div>
      <section id="section-1-header">
        <h1 id="h1-tom">TM</h1>
        <nav id="nav-header">
          <ul id="list-links">
            <li clas="li-links">
              <Link to="/meu-portfolio">Início</Link>
            </li>
            <li clas="li-links">
              <Link to="/meu-portfolio/abouteMe">Sobre mim</Link>
            </li>
            <li clas="li-links">
              <Link to="/meu-portfolio/projects">Projetos</Link>
            </li>
            <li clas="li-links">
              <Link to="/meu-portfolio/skills">Habilidades</Link>
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
