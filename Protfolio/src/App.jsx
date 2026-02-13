import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internship />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
