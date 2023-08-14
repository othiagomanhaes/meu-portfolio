import '../styles/Skills.css';
import { useContext, useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import skillsArray from '../services/skills';
import ThemeContext from '../Context/themeContext';

function Skills() {
  const textDefaultTec = 'Passe o mouse por cima da habilidade que deseja saber mais.'
  const [descriTec, setDescriTec] = useState(textDefaultTec);

  const showDescriSkill = (skill) => {
    const skills = skillsArray.find(({ nome }) => nome === skill)

    setDescriTec(skills.texto);
  }

  // useEffect(() => {
  //   ScrollReveal().reveal('.div-hidden-skills', { delay: 300, reset: true });
  // })

  const defaulTextTec = () => {
    setDescriTec(textDefaultTec);
  }

  const { isDark } = useContext(ThemeContext);

  return (
    <div className="div-skills">
      <section id={ isDark ? "section-skills-black" : "section-skills"}>
        <div className="div-hidden-skills">
          <h3 id={ isDark ? "title-skills-black" : "title-skills"}>Minhas Habilidades</h3>
          <div id="div-list">
            <ul id="list-skills">
              {skillsArray.map(({ nome, imagem }, ind) => (
                <li
                  className={ isDark ? "li-tecs-black" : "li-tecs"}
                  onMouseOver={ () => { showDescriSkill(nome); } }
                  onMouseOut={ () => { defaulTextTec(); } }
                  key={ ind }
                >
                  <img className="img-tec" src={ imagem } alt={ nome }/>
                  { nome }
                </li>
              ))}
            </ul>
            <div id={ isDark ? "div-disc-tec-black" : "div-disc-tec"}>{descriTec}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
