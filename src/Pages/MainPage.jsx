import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import { useEffect } from 'react';

function MainPage() {
  useEffect(() => {
    document.title = "Thiago Manhães";
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default MainPage;
