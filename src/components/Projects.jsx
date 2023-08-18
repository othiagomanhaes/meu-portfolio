import '../styles/Projects.css';
import { useContext } from 'react';
// import ScrollReveal from 'scrollreveal';
import projects from '../services/projects';
import ThemeContext from '../Context/themeContext';
import imgLinkBlack from '../images/linkExternoBlack.png'
import imgGitHubBlack from '../images/githubBlack.png'


function Projects() {
  // useEffect(() => {
  //   ScrollReveal().reveal('.div-hidden-projects', { delay: 300, reset: true });
  // })

  const { isDark } = useContext(ThemeContext);
  return (
    <div id="div-pro">
      <section id={ isDark ? "section-projects-black" : "section-projects"}>
        <div className="div-hidden-projects">
          <h3 id={ isDark ? "title-projects-black" : "title-projects"}>Meus Projetos</h3>
          <div id="div-projects">
            { projects.map((
              {imagem, titulo, linkAlive, imgLink, linkGithub, imgGithub, texto}, ind) => (
              <div className={ isDark ? "project-black" : "project"} key={ind}>
                <img src={ imagem } alt="gif do projeto" className="imgsProject"/>
                <div className="project-text">
                  <div className="descreve-project">
                    <h3 className={ isDark ? "h3-title-project-black" : "h3-title-project"}>{titulo}</h3>
                    <div className="imgs-icones">
                      <a href={ linkAlive} target="_blank" rel="noreferrer"><img src={ isDark ? imgLink : imgLinkBlack } alt="linkLogo" /></a>
                      <a href={linkGithub} target="_blank" rel="noreferrer"><img src={ isDark ? imgGithub : imgGitHubBlack } alt="linkLogo" /></a>
                    </div>
                  </div>
                  <p className={ isDark ? "p-project-black" : "p-project"}>{texto}</p>
                </div>
            </div> 
            ))}
            <div className={ isDark ? "project-black" : "project"}>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
