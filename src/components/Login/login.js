import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./login.css";

const LoginForm = (props) => {
  const {
    loginStatus,
    onRegistrationClick,
    submittedLoginForm,
    updateUsername,
    updatePassword,
    errMsg,
    username,
    password,
  } = props;
  const hide = loginStatus ? "" : "hide-login-form";

  const onSubmit = (event) => {
    event.preventDefault();
    submittedLoginForm();
  };

  const onUsernameChange = (event) => {
    updateUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    updatePassword(event.target.value);
  };

  const anchorRegistrationClicked = () => {
    onRegistrationClick();
  };

  return (
    <div className="container-login">
      <form className={`form-login ${hide}`} onSubmit={onSubmit}>
        <h1 className="login-heading">Login</h1>
        <div className="mb-3">
          <label htmlFor="loginUsername" className="login-form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="loginUsername"
            placeholder="Enter Username"
            onChange={onUsernameChange}
            value={username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="login-form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            onChange={onPasswordChange}
            placeholder="Enter Password"
            value={password}
          />
        </div>
        <button className="button-login" type="button" onClick={onSubmit}>
          Login
        </button>
        <button
          className="anchor-button-login"
          type="button"
          onClick={anchorRegistrationClicked}
        >
          <p className="error-msg">{errMsg}</p>
          Don't have an account? <span>Register</span>
        </button>
      </form>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
        alt="login"
        className="login-image"
      />
    </div>
  );
};

export default LoginForm;
