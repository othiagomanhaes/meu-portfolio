import '../styles/Projects.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import projects from '../services/projects';


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
            { projects.map((
              {imagem, titulo, linkAlive, imgLink, linkGithub, imgGithub, texto}, ind) => (
              <div className="project" key={ind}>
                <img src={ imagem } alt="iphone" className="imgsProject"/>
                <div className="project-text">
                  <div className="descreve-project">
                    <h3>{titulo}</h3>
                    <div className="imgs-icones">
                      <a href={linkAlive} target="_blank" rel="noreferrer"><img src={ imgLink } alt="linkLogo" /></a>
                      <a href={linkGithub} target="_blank" rel="noreferrer"><img src={ imgGithub } alt="linkLogo" /></a>
                    </div>
                  </div>
                  <p>{texto}</p>
                </div>
            </div> 
            ))}
            <div className="project">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
