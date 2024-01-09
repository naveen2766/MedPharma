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
    // updateNumber,
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

  //   const onNumberChange = (event) => {
  //     updateNumber(parseInt(event.target.value));
  //   };

  const onEmailChange = (event) => {
    updateEmail(event.target.value);
  };

  return (
    <div className="container-reg">
      <form className={`reg-form ${hide}`} onSubmit={onSubmit}>
        <h1 className="reg-heading">Registration</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label-reg">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            width={5}
            onChange={onChangeUsernmae}
            placeholder="Choose Username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label-reg">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onNameChange}
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label-reg">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={onEmailChange}
            placeholder="Enter Your E-mail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label-reg">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onPasswordChange}
            placeholder="Enter Password"
          />
        </div>
        <button className="button-reg" type="button" onClick={onSubmit}>
          Submit
        </button>
        <button
          className="anchor-button-reg"
          type="button"
          onClick={anchorLoginClicked}
        >
          Already have an account? <span>Login</span>
        </button>
        {/* <p className="err-msg">{errMsg}</p> */}
      </form>
      <img
        src="https://i.postimg.cc/Zn4q00ZV/12445724-4967621.jpg"
        alt="registration"
        className="reg-image"
      />
    </div>
  );
};

export default Registration;
