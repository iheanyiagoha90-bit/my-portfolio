import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/Logo.png";

export default function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="headerLogo" alt="header logo"></img>

      <nav className="navbar menu">
        <a href="#home" onClick={() => props.setPagechange("Home")}>
          Home
        </a>
        <a href="#about" onClick={() => props.setPagechange("About")}>
          About
        </a>
        <a href="#skills" onClick={() => props.setPagechange("Skills")}>
          Skills
        </a>
        <a href="#projects" onClick={() => props.setPagechange("Projects")}>
          Projects
        </a>
        <a href="#experience" onClick={() => props.setPagechange("Experience")}>
          Experience
        </a>
        <a href="#contact" onClick={() => props.setPagechange("Contact")}>
          Contact
        </a>
      </nav>
      <button
        className={`theme-toggle ${props.isDark ? "dark" : "light"}`}
        onClick={props.toggleTheme}
        aria-label="Toggle light and dark mode"
        title="Toggle theme"
      >
        <FontAwesomeIcon icon={props.isDark ? faMoon : faSun} />
      </button>
    </header>
  );
}
