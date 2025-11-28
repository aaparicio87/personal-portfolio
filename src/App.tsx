import Landing from "@pages/Landing";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

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
