import AboutPage from './Pages/AboutPage';
import { Route, Switch } from 'react-router-dom';
import SkillsPage from './Pages/SkillsPage';
import ProjectsPage from './Pages/ProjectsPage';
import MainPage from './Pages/MainPage';
import TrunfoDC from './Pages/TrunfoDC';
import Trybetune from './Pages/Trybetunes';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/meu-portfolio" component={ MainPage }/>
        <Route path="/meu-portfolio/abouteMe" component={ AboutPage } />
        <Route path="/meu-portfolio/skills" component={ SkillsPage }/>
        <Route path="/meu-portfolio/projects" component={ ProjectsPage }/>
        <Route path="/projects/trunfo-herois-dc" component={ TrunfoDC }/>
        <Route path="/projects/trybetunes" component={ Trybetune }/>
      </Switch>
    </div>
  );
}

export default App;
