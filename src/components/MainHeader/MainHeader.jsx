import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

// props.isLoggedIn         props.onLogOut

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1> A Typical Page </h1>{" "}
      <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />{" "}
    </header>
  );
};

export default MainHeader;
