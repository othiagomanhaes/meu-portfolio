import '../styles/Skills.css';
import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import skillsArray from '../services/skills';

function Skills() {
  const textDefaultTec = 'Passe o mouse por cima da habilidade ao lado para saber mais.'
  const [descriTec, setDescriTec] = useState(textDefaultTec);

  const showDescriSkill = (skill) => {
    const skills = skillsArray.find(({ nome }) => nome === skill)

    setDescriTec(skills.texto);
  }

  useEffect(() => {
    ScrollReveal().reveal('.div-hidden-skills', { delay: 300, reset: true });
  })

  const defaulTextTec = () => {
    setDescriTec(textDefaultTec);
  }

  return (
    <div className="div-skills">
      <section id="section-skills">
        <div className="div-hidden-skills">
          <h3 id="title-skills">Minhas Habilidades</h3>
          <div id="div-list">
            <ul id="list-skills">
              {skillsArray.map(({ nome, imagem }, ind) => (
                <li
                  className="li-tecs"
                  onMouseOver={ () => { showDescriSkill(nome); } }
                  onMouseOut={ () => { defaulTextTec(); } }
                  key={ ind }
                >
                  <img className="img-tec" src={ imagem } alt={ nome }/>
                  { nome }
                </li>
              ))}
            </ul>
            <div id="div-disc-tec">{descriTec}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;

// </li>
//               <li
//                 className="li-tecs"
//                 onMouseOver={ () => { showDescriSkill('css'); } }
//                 onMouseOut={ () => { defaulTextTec(); } }
//               >
//                 <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" />
//                 CSS
//               </li>
//               <li
//                 className="li-tecs"
//                 onMouseOver={ () => { showDescriSkill('javascript'); } }
//                 onMouseOut={ () => { defaulTextTec(); } }
//               >
//                 <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javaScript" />
//                 JavaScript
//               </li>
//               <li
//                 className="li-tecs"
//                 onMouseOver={ () => { showDescriSkill('react'); } }
//                 onMouseOut={ () => { defaulTextTec(); } }
//               >
//                 <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
//                 React
//               </li>
//               <li
//                 className="li-tecs"
//                 onMouseOver={ () => { showDescriSkill('redux'); } }
//                 onMouseOut={ () => { defaulTextTec(); } }
//               >
//                 <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux" />
//                 Redux
//               </li>
//               <li
//                 className="li-tecs"
//                 onMouseOver={ () => { showDescriSkill('jest'); } }
//                 onMouseOut={ () => { defaulTextTec(); } }
//               >
//                 <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="jest" />
//                 Jest
//               </li>
//               <li
//                 className="li-tecs"
//                 onMouseOver={ () => { showDescriSkill('rtl'); } }
//                 onMouseOut={ () => { defaulTextTec(); } }
//               >
//                 <img className="img-tec" src="https://testing-library.com/img/octopus-128x128.png" alt="react testing library" />
//                 RTL
//               </li>
//               <li
//                 className="li-tecs"
//                 onMouseOver={ () => { showDescriSkill('git'); } }
//                 onMouseOut={ () => { defaulTextTec(); } }
//               >
//                 <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" />
//                 Git
//               </li>
//               <li
//                 className="li-tecs"
//                 onMouseOver={ () => { showDescriSkill('github'); } }
//                 onMouseOut={ () => { defaulTextTec(); } }
//               >
//                 <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
//                 Github
//               </li>