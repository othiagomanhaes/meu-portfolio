import AboutPage from './Pages/AboutPage';
import { Route, Switch } from 'react-router-dom';
import SkillsPage from './Pages/SkillsPage';
import ProjectsPage from './Pages/ProjectsPage';
import MainPage from './Pages/MainPage';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ MainPage }/>
        <Route path="/abouteMe" component={ AboutPage } />
        <Route path="/skills" component={ SkillsPage }/>
        <Route path="/projects" component={ ProjectsPage }/>
      </Switch>
    </div>
  );
}

export default App;
