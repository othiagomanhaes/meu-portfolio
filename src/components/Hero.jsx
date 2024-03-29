// import Typical from 'react-typical';
import { useContext, useEffect } from "react";
import TypeIt from "typeit";
import '../styles/Hero.css';
import pessoaPrograWhite from '../images/pessoaProgramaWhite.png';
import pessoaPrograBlack from '../images/pessoaProgramaBlack.png';
import ThemeContext from "../Context/themeContext";

function Hero() {
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    new TypeIt(`#p-ola${isDark ? '-black' : ''}`, {
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
      .type("<b>Fullstack Developer</b>")
      .go();
  }, [])
  
  return (
    <div id={ isDark ? "header-port" : "header-port-black"}>
      <section id="section-2-header">
        <div id="div1-section-2">
          <p id={ isDark ? "p-ola-black" : "p-ola"} />
        </div>

        <div id="div2-section-2">
          <img
            id ="img-laptop"
            src={ isDark ? pessoaPrograWhite : pessoaPrograBlack }
            alt="desenho de alguém no notebook"
          />
        </div>
      </section>       
    </div>
  );
}

export default Hero;


// vasco
