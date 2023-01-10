import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../styles/Header.css';
import pessoaProgra from '../images/pessoaProgra.png';

function Header() {
  useEffect(() => {
    anime({
      targets: '#section-2-header',
      translateY: [10, 150], // from 100 to 250
      delay: 500,
      direction: 'alternate',
      // rotate: '1turn',
    });
  }, []);


  return (
    <header id="header-port">
      <section id="section-2-header">
        <div id="div1-section-2">
          <p id="p-ola">Olá, eu sou</p>
          <p id="meu-nome">Thiago Manhães</p>
          <h4 id="title-front">Front-End Developer</h4>
        </div>

        <div id="div2-section-2">
          <img
            id ="img-laptop"
            src={ pessoaProgra }
            alt="desenho de alguém no notebook"
          />
        </div>
      </section>       
    </header>
  );
}

export default Header;


// vasco
