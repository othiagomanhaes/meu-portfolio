import '../styles/Skills.css';

function Skills() {
  return (
    <div>
      <section id="section-skills">
        <h3 id="title-skills">Minhas Habilidades</h3>
        <div id="div-list">
          <ul id="list-skills">
            <li className="li-tecs">
              <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html"/>
              HTML
            </li>
            <li className="li-tecs">
              <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" />
              CSS
            </li>
            <li className="li-tecs">
              <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javaScript" />
              JavaScript
            </li>
            <li className="li-tecs">
              <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
              React
            </li>
            <li className="li-tecs">
              <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux" />
              Redux
            </li>
            <li className="li-tecs">
              <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="jest" />
              Jest
            </li>
            <li className="li-tecs">
              <img className="img-tec" src="https://testing-library.com/img/octopus-128x128.png" alt="react testing library" />
              RTL
            </li>
            <li className="li-tecs">
              <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" />
              Git
            </li>
            <li className="li-tecs">
              <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
              Github
            </li>
          </ul>
          <div id="div-disc-tec">descrição da tecnologia</div>
        </div>
      </section>
    </div>
  );
}

export default Skills;