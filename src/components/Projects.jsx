import '../styles/Projects.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Projects() {
  useEffect(() => {
    ScrollReveal().reveal('.div-hidden-projects', { delay: 300, reset: true });
  })

  return (
    <div>
      <section id="section-projects">
        <div className="div-hidden-projects">
          <h3 id="title-projects">Meus Projetos</h3>
          <div id="div-projects">
            <div className="project p1">
              <div className="front">
                Trunfo Heróis DC
              </div>
              <div className="back">
                <Link id="link-herois" to="/projects/trunfo-herois-dc">
                  <img id="img-dc" src="https://i.pinimg.com/564x/93/ba/69/93ba69647799767cf4b5d884d0237732.jpg" alt="img dc" />
                </Link>
              </div>
            </div>
            <div className="project p2">
              <div className="front">
                Projeto 2 em breve
              </div>
              <div className="back">
                BACK
              </div>
            </div>
            <div className="project p3">
              <div className="front">
                Projeto 3 em breve
              </div>
              <div className="back">
                BACK
              </div>
            </div>
            <div className="project p4">
              <div className="front">
                Projeto 4 em breve
              </div>
              <div className="back">
                BACK
              </div>
            </div>
            <div className="project p5">
              <div className="front">
                Projeto 5 em breve
              </div>
              <div className="back">
                BACK
              </div>
            </div>
            <div className="project p6">
              <div className="front">
                Projeto 6 em breve
              </div>
              <div className="back">
                BACK
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
