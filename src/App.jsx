import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  // props.isLoggedIn       props.onLogout
  return (
    <React.Fragment>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <main>
        {!isLoggedIn && <Login onLogin={onLogin} />}
        {isLoggedIn && <Home onLogout={onLogout} />}
      </main>
    </React.Fragment>
  );
}

export default App;
