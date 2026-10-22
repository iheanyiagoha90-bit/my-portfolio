import { useState } from "react";
import Header from "./Header";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Projects from "./Pages/Projects.jsx";
import Experience from "./Pages/Experience.jsx";
import Contact from "./Pages/Contact.jsx";

export default function App() {
  const [pagechange, setPagechange] = useState("Home");
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark((prev) => !prev);
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
