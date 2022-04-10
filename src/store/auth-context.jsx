import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;

// AuthContext is not a component but AuthContext.Provider is
