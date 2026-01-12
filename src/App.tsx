import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen text-gray-100 font-sans selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm bg-dark-800">
        <p>© {new Date().getFullYear()} Ebi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
