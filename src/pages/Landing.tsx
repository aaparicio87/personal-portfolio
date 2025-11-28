import Navigation from "@components/navigation/Navigation";
import Experience from "@components/experience/Experience";
import Hero from "@components/hero/Hero";
import About from "@components/about/About";
import Skills from "@components/skills/Skills";
import Projects from "@components/projects/Projects";
import Contact from "@components/contact/Contact";

const Landing = () => {
  return (
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
        <p>&copy; 2025 Alejandro Aparicio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
