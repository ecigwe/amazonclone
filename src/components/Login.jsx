import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../img/amazonimg.png";
import "../css/login.css";
import { auth } from "./Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>
      <div className="login__container">
        <form>
          <h2>signin</h2>
          <h3>email</h3>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h3>password</h3>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            signin
          </button>
        </form>
        <p>signing in you agree to amazon conditions</p>
        <button onClick={register} className="login__registerButton">
          singing to amazon
        </button>
      </div>
    </div>
  );
}

export default Login;
