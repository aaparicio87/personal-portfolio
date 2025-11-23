import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
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
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Navigation />

          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <footer className="bg-gray-50 dark:bg-gray-800 py-8 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 Alejandro Aparicio. All rights reserved.</p>
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
