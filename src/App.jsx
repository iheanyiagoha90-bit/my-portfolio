import { useState, useEffect } from "react";
import Header from "./Header";
import Login from "./Pages.jsx/Login";
import Home from "./Pages.jsx/Home";
import Admin from "./Pages.jsx/Admin";
import TimeAnalysis from "./Pages.jsx/TimeAnalysis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [username, setUsername] = useState("");

  const [isshow, setIsshow] = useState(false);

  const [pagechange, setPagechange] = useState("Home");
  const [showWelcome, setShowWelcome] = useState(false);

  function handleLogin(name) {
    setUsername(name);
    setShowWelcome(true);
    setIsshow(true);
  }

  function handleLogout() {
    setUsername("");
    setShowWelcome(false);
    setIsshow(false);
  }

  useEffect(() => {
    if (!showWelcome) return;

    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showWelcome]);

  return (
    <div>
      {!isshow ? (
        <>
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <>
          <Header
            Logout={handleLogout}
            user={username}
            setPage={setPagechange}
          />
          <div className="container alert mt-3">
            {showWelcome && (
              <div className="alert alert-success" role="alert">
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} className="me-2" />
                Welcome, {username}!<br></br>You have successfully logged in.
              </div>
            )}
          </div>
        </>
      )}

      {isshow && (
        <>
          {pagechange === "Home" && <Home setPage={setPagechange} />}

          {pagechange === "Admin" && <Admin setPage={setPagechange} />}

          {pagechange === "TimeAnalysis" && (
            <TimeAnalysis setPage={setPagechange} />
          )}
        </>
      )}
    </div>
  );
}
