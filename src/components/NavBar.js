import "./NavBar.css";
import React from "react";

const NavBar = (props) => {
  const {
    onRegistrationClick,
    onLoginClick,
    onAlternateTabletClick,
    hideLoginRegButton,
  } = props;
  const registrationClicked = () => {
    onRegistrationClick();
  };
  const loginClicked = () => {
    onLoginClick();
  };

  const alternateTabletsClicked = () => {
    onAlternateTabletClick();
  };

  return (
    <div className="navBarStyle">
      <img
        src="https://i.postimg.cc/VvFYvTRY/pharmacy-logo-removebg-preview.png"
        alt="logo"
        className="logo"
      />
      <button
        className={`button-nav buttonStyle ${hideLoginRegButton}`}
        onClick={registrationClicked}
      >
        Registration
      </button>
      <button
        className={`button-nav buttonStyle ${hideLoginRegButton}`}
        onClick={loginClicked}
      >
        Login
      </button>
      <button className="button-nav buttonStyle">Nearby Pharmacies</button>
      <button
        className="buttonStyle button-nav"
        onClick={alternateTabletsClicked}
      >
        Alternate Tablet Search
      </button>
    </div>
  );
};

export default NavBar;
