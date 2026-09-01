import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Credentials } from './components/Credentials';
import { Achievements } from './components/Achievements';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-near-black)] text-[var(--color-soft-white)] selection:bg-[var(--color-soft-white)] selection:text-[var(--color-near-black)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Achievements />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
