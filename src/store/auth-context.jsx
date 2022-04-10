import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({});

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        count,
        setCount,
        isLoggedIn,
        setIsLoggedIn,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// AuthContext is not a component but AuthContext.Provider is
