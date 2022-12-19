import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../styles/Header.css';

function Header() {
  useEffect(() => {
    anime({
      targets: '#section-2-header',
      translateY: [100, 250], // from 100 to 250
      delay: 500,
      direction: 'alternate',
      rotate: '1turn',
    });
  }, [])

  return (
    <header id="header-port">
     <section id="section-2-header">
      <div id="div1-section-2">
        <p id="p-ola">Olá, eu sou</p>
        <p id="meu-nome">Thiago Manhães</p>
        <h4 id="front-title">Front-End Developer</h4>
      </div>

      <div id="div2-section-2">
        <img
          id ="img-laptop"
          src="https://i.pinimg.com/564x/ce/9f/d5/ce9fd5ad449721f0bf1268e40937153a.jpg"
          alt="desenho de alguém no notebook"
        />
      </div>
      </section>
    </header>
  );
}

export default Header;


// vasco
