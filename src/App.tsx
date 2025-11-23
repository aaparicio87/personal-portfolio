import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />

        <main className="pt-16">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="bg-gray-50 dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Full-Stack JavaScript Developer. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
