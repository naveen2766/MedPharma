import "./NavBar.css";
import React from "react";

const NavBar = (props) => {
  const {
    onRegistrationClick,
    onLoginClick,
    onAlternateTabletClick,
    hideLoginRegButton,
    hideAltTabletSearchButton,
    logoutClicked,
    homeButtonClick,
    nearByMedClicked,
  } = props;

  const logOut = () => {
    logoutClicked();
  };

  const nearByMedPharma = () => {
    nearByMedClicked();
  };
  const registrationClicked = () => {
    onRegistrationClick();
  };
  const loginClicked = () => {
    onLoginClick();
  };

  const alternateTabletsClicked = () => {
    onAlternateTabletClick();
  };
  const homeClicked = () => {
    homeButtonClick();
  };

  return (
    <div className="navBarStyle">
      <img
        src="https://i.postimg.cc/VvFYvTRY/pharmacy-logo-removebg-preview.png"
        alt="logo"
        className="logo"
      />
      <button className={`button-nav buttonStyle`} onClick={homeClicked}>
        Home
      </button>
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
      <button
        className={`button-nav buttonStyle ${hideAltTabletSearchButton}`}
        onClick={nearByMedPharma}
      >
        Nearby Pharmacies
      </button>
      <button
        className={`buttonStyle button-nav ${hideAltTabletSearchButton}`}
        onClick={alternateTabletsClicked}
      >
        Alternate Tablet Search
      </button>
      <button
        className={`buttonStyle button-nav ${hideAltTabletSearchButton}`}
        onClick={logOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default NavBar;
