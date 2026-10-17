import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFutbol,
  faNewspaper,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Header({ user, setPage, Logout }) {
  

  return (
    <nav
      className="navbar navbar-expand-md bg-dark border-bottom border-body p-2"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <span className="navbar-brand logo " onClick={() => setPage("Home")}>
          Logo
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link" onClick={() => setPage("Home")}>
                <FontAwesomeIcon icon={faHouse} className="me-2" />
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setPage("TimeAnalysis")}
              >
                <FontAwesomeIcon icon={faFutbol} className="me-2" />
                Time Analysis
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={() => setPage("Admin")}>
                <FontAwesomeIcon icon={faNewspaper} className="me-2" />
                Admin
              </button>
            </li>
          </ul>

          <span className="navbar-text">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            {user}
          </span>
          <button className="btn" onClick={Logout}>
            <FontAwesomeIcon icon={faRightFromBracket} className="logouticon" />
          </button>
        </div>
      </div>
    </nav>
  );
}
