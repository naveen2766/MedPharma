import Registration from "./components/registration";
import LoginForm from "./components/Login/login";
import "./App.css";

import { Component } from "react";
import NavigationBar from "./components/NavBar";

class App extends Component {
  state = {
    registerClick: false,
    loginStatus: false,
    username: "",
    name: "",
    password: "",
    email: "",
    number: "",
  };

  onRegistrationClick = () => {
    const { registerClick } = this.state;
    this.setState({ registerClick: !registerClick, loginStatus: false });
  };

  submittedRegistrationForm = async () => {
    const { username, password, name, number, email } = this.state;
    const inputData = {
      username,
      password,
      name,
      number,
      email,
    };
    await fetch("http://localhost:5000/reg", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        data: inputData,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("server response:", data);
      })
      .catch((err) => {
        console.log("Error-w: ", err);
      });
  };

  submittedLoginForm = async () => {
    const { username, password } = this.state;
    const inputData = {
      username,
      password,
    };
    await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        data: inputData,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("server response:", data);
      })
      .catch((err) => {
        console.log("Error-w: ", err);
      });
  };

  onLoginClick = () => {
    const { loginStatus } = this.state;
    this.setState({ registerClick: false, loginStatus: !loginStatus });
  };

  updateUsername = (username) => {
    this.setState({ username: username });
  };

  updateName = (name) => {
    this.setState({ name: name });
  };

  updateEmail = (email) => {
    this.setState({ email: email });
  };

  updatePassword = (p) => {
    this.setState({ password: p });
  };
  updateNumber = (num) => {
    this.setState({ number: num });
  };

  render() {
    const { registerClick, loginStatus } = this.state;

    return (
      <div>
        <NavigationBar
          onRegistrationClick={this.onRegistrationClick}
          onLoginClick={this.onLoginClick}
        />
        {registerClick ? (
          <Registration
            updateUsername={this.updateUsername}
            registerClick={registerClick}
            onLoginClick={this.onLoginClick}
            updateEmail={this.updateEmail}
            updateName={this.updateName}
            updatePassword={this.updatePassword}
            updateNumber={this.updateUsername}
            submittedRegistrationForm={this.submittedRegistrationForm}
          />
        ) : (
          <></>
        )}
        {loginStatus ? (
          <LoginForm
            loginStatus={loginStatus}
            onRegistrationClick={this.onRegistrationClick}
            submittedLoginForm={this.submittedLoginForm}
            updateUsername={this.updateUsername}
            updatePassword={this.updatePassword}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
