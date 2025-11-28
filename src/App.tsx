import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Landing from "./pages/Landing";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Landing />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
