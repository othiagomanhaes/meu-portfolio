import '../styles/Projects.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import trybetunes from '../images/trybetunes-video.gif';
import trunfoHerois from '../images/trunfo-herois.gif';
import linkWhite from '../images/link-externo-white.png';
import imgGithub from '../images/img-Github.png'


function Projects() {
  useEffect(() => {
    ScrollReveal().reveal('.div-hidden-projects', { delay: 300, reset: true });
  })

  return (
    <div id="div-pro">
      <section id="section-projects">
        <div className="div-hidden-projects">
          <h3 id="title-projects">Meus Projetos</h3>
          <div id="div-projects">
            <div className="project">
              <img src={ trybetunes } alt="iphone" className="imgsProject"/>
              <div className="project-text">
                <div className="descreve-project">
                  <h3>Trybetunes</h3>
                  <div className="imgs-icones">
                    <a href="https://othiagomanhaes.github.io/trybetunes/" target="_blank" rel="noreferrer"><img src={ linkWhite } alt="linkLogo" /></a>
                    <a href="https://github.com/othiagomanhaes/trybetunes" target="_blank" rel="noreferrer"><img src={ imgGithub } alt="linkLogo" /></a>
                  </div>
                </div>
                <p>Uma apliacação em React com chamada a API da Apple para buscar artistas e albuns. Também se pode escutar a prévia de suas musicas e favoritá-las.</p>
              </div>
            </div>

            <div className="project">
              <img src={ trunfoHerois } alt="iphone" className="imgsProject"/>
              <div className="project-text">
                <div className="descreve-project">
                  <h3>Tryunfo DC</h3>
                  <div className="imgs-icones">
                    <a href="https://othiagomanhaes.github.io/trunfo-herois-dc" target="_blank" rel="noreferrer"><img src={ linkWhite } alt="linkLogo" /></a>
                    <a href="https://github.com/othiagomanhaes/trunfo-herois-dc" target="_blank" rel="noreferrer"><img src={ imgGithub } alt="linkLogo" /></a>
                  </div>
                </div>
                  <p>Uma aplicação de estados no React com componentes de classe. Usando Forms e fazendo a replica do jogo de cartas com tema Herois DC.</p>
              </div>
            </div>

            <div className="project">
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
