import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/Logo.png";

export default function Header() {
  return (

    <Header className="header">

      <img src={logo} className="headerLogo" alt="header logo"></img>

      <nav className="navbar">
        
        <a href="#home">Home</a>
        <a href="#about">Projects</a>
        <a href="#services">Resume</a>
        
      </nav>
      <div>
        <FontAwesomeIcon icon={faMoon} className="moonicon" />
      </div>
    </Header>
  );
}
