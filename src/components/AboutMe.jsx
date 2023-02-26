import '../styles/AboutMe.css';
import imgEu from '../images/euImg.jpg';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function AboutMe() {
  useEffect(() => {
    ScrollReveal().reveal('.div-hidden-sobreMim', { delay: 300, reset: true });
  })
  return (
    <div>
      <section id="section-SobreMim">
        <div className="div-hidden-sobreMim">
          <h2 id="title-SobreMim">Sobre mim</h2>
          <p id="texto-SobreMim">Olá, mundo! Eu sou o Thiago Manhães, nasci no Rio de Janeiro - Brasil, e como a maiorira dos brasileiros, eu amo futebol. Mas também amo uma boa praia, acampar, fazer trilhas e conversar sobre filmes e séries. <br /> <br /> Descobri uma paixão que se chama programação, e somado com minha curiosidade natural e meu desejo, muito ativo, de estar sempre aprendendo algo, tenho adquirido novas habilidades e vivido boas aventuras nesse universo maravilhoso da programação.</p>
          <img id="minha-foto" src={ imgEu } alt="imagem de Thiago" />
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
