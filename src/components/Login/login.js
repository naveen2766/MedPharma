import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./login.css";

const LoginForm = (props) => {
  const { loginStatus, onRegistrationClick } = props;
  const hide = loginStatus ? "" : "hide-login-form";

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Login button clicked");
    // Add your login logic here
  };

  const anchorRegistrationClicked = () => {
    onRegistrationClick();
  };

  return (
    <form className={`container mt-5 ${hide}`} onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="loginUsername" className="form-label">
          Username
        </label>
        <input type="text" className="form-control" id="loginUsername" />
      </div>
      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="loginPassword" />
      </div>
      <button className="button" type="button" onClick={onSubmit}>
        Login
      </button>
      <button
        className="anchor-button"
        type="button"
        onClick={anchorRegistrationClicked}
      >
        Don't have an account? <span>Register</span>
      </button>
    </form>
  );
};

export default LoginForm;
