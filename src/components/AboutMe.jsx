import '../styles/AboutMe.css';
import imgEu from '../images/euImg.jpg';

function AboutMe() {
  return (
    <div>
      <section id="section-SobreMim">
        <h2 id="title-SobreMim">Sobre mim</h2>
        <p id="texto-SobreMim">Olá, mundo! Eu sou o Thiago Manhães, nasci no Rio de Janeiro - Brasil, e como a maiorira dos brasileiros, eu amo futebol. Mas também amo uma boa praia, acampar, fazer trilhas e conversar sobre filmes e séries. Descobri uma paixão que se chama programação, e somado com minha curiosidade natural e meu desejo, muito ativo, de estar sempre aprendendo algo, tenho adquirido novas habilidades e vivido boas aventuras nesse universo maravilhoso da programação.</p>
        <img id="minha-foto" src={ imgEu } alt="imagem de Thiago" />
      </section>
    </div>
  );
}

export default AboutMe;
