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
    <form className={`container mt-5 ${hide}`} onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="loginUsername" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="loginUsername"
          onChange={onUsernameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          onChange={onPasswordChange}
        />
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
