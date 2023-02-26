// import Typical from 'react-typical';
import { useEffect } from "react";
import TypeIt from "typeit";
import '../styles/Header.css';
import pessoaProgra from '../images/pessoaProgra.png';

function Header() {
  useEffect(() => {
    new TypeIt("#p-ola", {
      speed: 80,
      waitUntilVisible: true,
    })
      .type("Hllo", { delay: 300 })
      .move(-3)
      // .delete(1)
      .type("e")
      .move(null, { to: "END" })
      .type(", world! ")
      .break({ delay: 500 })
      .type("I'm ")
      .type("<span><b>Thiago</b></span>")
      .pause(300)
      .break({ delay: 500 })
      .type("Geek")
      .pause(500)
      .delete(4)
      .pause(500)
      .type("Gamer")
      .pause(500)
      .delete(5)
      .pause(500)
      .type("<b>Front-End Developer</b> ")
      // .move(-4)
      // .type("o")
      // .move(null, { to: "END" })
      // .type("h of today.")
      // .pause(500)
      // .break({ delay: 500 })
      // .break({ delay: 500 })
      // .type("<em>- Will Rogers</em>")
      .go();
  }, [])
  
  return (
    <header id="header-port">
      <section id="section-2-header">
        <div id="div1-section-2">
          <p id="p-ola" />
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
