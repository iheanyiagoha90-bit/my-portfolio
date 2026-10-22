import {useState} from "react"
import Header from "./Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";


export default function App(){

  const [pagechange, setPagechange] = useState("Home")
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark(prev => !prev);
  }

  return (
    <main className={`page ${isDark ? "dark-mode" : "light-mode"}`}>
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        pagechange={pagechange}
        setPagechange={setPagechange}
      />
      {pagechange === "Home" && <Home />}
      {pagechange === "About" && <About />}
      {pagechange === "Skills" && <Skills />}
      {pagechange === "Projects" && <Projects />}
      {pagechange === "Experience" && <Experience />}
      {pagechange === "Contact" && <Contact />}
    </main>
  );
}
