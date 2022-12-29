import '../styles/Skills.css';
import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

function Skills() {
  const textDefaultTec = 'Passe o mouse por cima da habilidade ao lado para saber mais.'
  const [descriTec, setDescriTec] = useState(textDefaultTec);

  const showDescriSkill = (skill) => {
    const skills = {
      github: 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.',
      redux: 'Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo.',
      git: 'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.',
      react: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
      javascript: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
      rtl: 'A React Testing Library é um conjunto de ferramentas voltadas para testar cada um dos componentes React que o desenvolvedor utilizar.',
      css: 'Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>.',
      html: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.',
      jest: 'Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.',
    };
    setDescriTec(skills[skill]);
  }

  useEffect(() => {
    ScrollReveal().reveal('.div-hidden-skills', { delay: 300, reset: true });
  })

  const defaulTextTec = () => {
    setDescriTec(textDefaultTec);
  }

  return (
    <div>
      <section id="section-skills">
        <div className="div-hidden-skills">
          <h3 id="title-skills">Minhas Habilidades</h3>
          <div id="div-list">
            <ul id="list-skills">
              <li
                className="li-tecs"
                onMouseOver={ () => { showDescriSkill('html'); } }
                onMouseOut={ () => { defaulTextTec(); } }
              >
                <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html"/>
                HTML
              </li>
              <li
                className="li-tecs"
                onMouseOver={ () => { showDescriSkill('css'); } }
                onMouseOut={ () => { defaulTextTec(); } }
              >
                <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" />
                CSS
              </li>
              <li
                className="li-tecs"
                onMouseOver={ () => { showDescriSkill('javascript'); } }
                onMouseOut={ () => { defaulTextTec(); } }
              >
                <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javaScript" />
                JavaScript
              </li>
              <li
                className="li-tecs"
                onMouseOver={ () => { showDescriSkill('react'); } }
                onMouseOut={ () => { defaulTextTec(); } }
              >
                <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
                React
              </li>
              <li
                className="li-tecs"
                onMouseOver={ () => { showDescriSkill('redux'); } }
                onMouseOut={ () => { defaulTextTec(); } }
              >
                <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux" />
                Redux
              </li>
              <li
                className="li-tecs"
                onMouseOver={ () => { showDescriSkill('jest'); } }
                onMouseOut={ () => { defaulTextTec(); } }
              >
                <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="jest" />
                Jest
              </li>
              <li
                className="li-tecs"
                onMouseOver={ () => { showDescriSkill('rtl'); } }
                onMouseOut={ () => { defaulTextTec(); } }
              >
                <img className="img-tec" src="https://testing-library.com/img/octopus-128x128.png" alt="react testing library" />
                RTL
              </li>
              <li
                className="li-tecs"
                onMouseOver={ () => { showDescriSkill('git'); } }
                onMouseOut={ () => { defaulTextTec(); } }
              >
                <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" />
                Git
              </li>
              <li
                className="li-tecs"
                onMouseOver={ () => { showDescriSkill('github'); } }
                onMouseOut={ () => { defaulTextTec(); } }
              >
                <img className="img-tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
                Github
              </li>
            </ul>
            <div id="div-disc-tec">{descriTec}</div>
          </div>
          {/* <div className="div-linha-3"></div> */}
        </div>
      </section>
    </div>
  );
}

export default Skills;