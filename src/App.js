import Registration from "./components/registration";
import LoginForm from "./components/Login/login";
import AlternateTablets from "./components/AlternateTablets";
import "./App.css";

import { Component } from "react";
import NavigationBar from "./components/NavBar";

class App extends Component {
  state = {
    registerClick: false,
    loginStatus: false,
    alternateTabletStatus: false,
    username: "",
    name: "",
    password: "",
    email: "",
    number: "",
    isSignedIn: false,
    errMsg: "",
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
    if (username === "" || password === "")
      this.setState({ errMsg: "Please fill all fields" });
    else {
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
          console.log(data.status === 200);
          if (data.status === 300) this.setState({ errMsg: "*User NotFound" });
          else if (data.status === 200) {
            this.setState({ errMsg: "*Invalid Password" });
          } else
            this.setState({
              isSignedIn: true,
              username: "",
              password: "",
              alternateTabletStatus: true,
              loginStatus: false,
              registerClick: false,
            });
        })
        .catch((err) => {
          this.setState({ errMsg: "" });
        });
    }
  };

  onLoginClick = () => {
    const { loginStatus } = this.state;
    this.setState({ registerClick: false, loginStatus: !loginStatus });
  };

  onAlternateTabletClick = () => {
    const { alternateTabletStatus } = this.state;
    this.setState({
      registerClick: false,
      loginStatus: false,
      alternateTabletStatus: !alternateTabletStatus,
    });
  };

  logoutClicked = () => {
    this.setState({ isSignedIn: false });
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
    const {
      registerClick,
      isSignedIn,
      loginStatus,
      alternateTabletStatus,
      errMsg,
      username,
      password,
    } = this.state;
    const hide_homepage =
      registerClick === true || loginStatus === true || alternateTabletStatus
        ? "hide-homepage"
        : "";
    const webInfo =
      registerClick === true || loginStatus === true || alternateTabletStatus
        ? "hide-webInfo"
        : "";
    const hideLoginRegButton = isSignedIn ? "hide-webInfo" : "";
    const hideAltTabletSearchButton = !isSignedIn ? "hide-webInfo" : "";
    return (
      <div>
        <NavigationBar
          onRegistrationClick={this.onRegistrationClick}
          onLoginClick={this.onLoginClick}
          onAlternateTabletClick={this.onAlternateTabletClick}
          hideLoginRegButton={hideLoginRegButton}
          hideAltTabletSearchButton={hideAltTabletSearchButton}
          logoutClicked={this.logoutClicked}
        />
        <div className={`homepage-container ${hide_homepage}`}>
          <h1 className="heading">MED PHARMA </h1>
          <p>Alternative Tablet Search with their Side Effects & Uses</p>
        </div>
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
            errMsg={errMsg}
            username={username}
            password={password}
          />
        ) : (
          <></>
        )}

        {alternateTabletStatus ? <AlternateTablets /> : <></>}

        <div className={`website-information ${webInfo}`}>
          <p className={`web-info ${webInfo}`}>
            The project aims to provide users with information about alternative
            tablets, their uses, and potential side effects. Users can search
            for alternative tablets based on their current prescriptions or
            medical conditions.
          </p>
        </div>
        <div className={`footer ${webInfo}`}>
          <p>&copy; 2024 Med Pharma. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default App;
