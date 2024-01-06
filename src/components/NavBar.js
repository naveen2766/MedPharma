// NavBar.js

import React from "react";

const NavBar = (props) => {
  const { onRegistrationClick, onLoginClick, onAlternateTabletClick } = props;
  const registrationClicked = () => {
    onRegistrationClick();
  };
  const loginClicked = () => {
    onLoginClick();
  };

  const alternateTabletsClicked = () => {
    onAlternateTabletClick();
  };
  const navBarStyle = {
    backgroundColor: "#3498db",
    padding: "10px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };

  const buttonStyle = {
    padding: "10px",
    margin: "0 10px",
    borderRadius: "5px",
    color: "#ffffff",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={navBarStyle}>
      <button style={buttonStyle} onClick={registrationClicked}>
        Registration
      </button>
      <button style={buttonStyle} onClick={loginClicked}>
        Login
      </button>
      <button style={buttonStyle}>Nearby Pharmacies</button>
      <button style={buttonStyle} onClick={alternateTabletsClicked}>
        Alternate Tablet Search
      </button>
    </div>
  );
};

export default NavBar;
