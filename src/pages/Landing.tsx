import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

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
