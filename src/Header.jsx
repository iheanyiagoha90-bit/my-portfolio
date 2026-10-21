import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/Logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="headerLogo" alt="header logo"></img>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <div>
        <FontAwesomeIcon icon={faMoon} className="moonicon" />
      </div>
    </header>
  );
}
