import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./registration.css";

const Registration = (props) => {
  const {
    registerClick,
    onLoginClick,
    updateUsername,
    updateEmail,
    updateName,
    updateNumber,
    updatePassword,
    submittedRegistrationForm,
  } = props;
  const hide = registerClick ? "" : "hide-registraion-form";

  const onSubmit = (event) => {
    submittedRegistrationForm();
  };
  const anchorLoginClicked = () => {
    onLoginClick();
  };
  const onChangeUsernmae = (event) => {
    updateUsername(event.target.value);
    console.log(event.target.value);
  };

  const onNameChange = (event) => {
    updateName(event.target.value);
  };

  const onPasswordChange = (event) => {
    updatePassword(event.target.value);
  };

  const onNumberChange = (event) => {
    updateNumber(parseInt(event.target.value));
  };

  const onEmailChange = (event) => {
    updateEmail(event.target.value);
  };

  return (
    //    <div className={`${hide}`}>
    <form className={`container mt-5 ${hide}`} onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          width={5}
          onChange={onChangeUsernmae}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={onNameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={onEmailChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Mobile Number
        </label>
        <input
          type="number"
          className="form-control"
          id="number"
          onChange={onNumberChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={onPasswordChange}
        />
      </div>
      <button className="button" type="button" onClick={onSubmit}>
        Submit
      </button>
      <button
        className="anchor-button"
        type="button"
        onClick={anchorLoginClicked}
      >
        Already have an account? <span>Login</span>
      </button>
    </form>
    // </div>
  );
};

export default Registration;
