import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Projects from './components/Projects';
import Services from './components/Services';
import Articles from './components/Articles';
import Principles from './components/Principles';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Featured />
        <Projects />
        <Services />
        <Articles />
        <Principles />
      </main>
      <Footer />
    </>
  );
}
