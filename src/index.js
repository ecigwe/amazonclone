import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
//import App from "./App";
import Form from "./components/Form";

import * as serviceWorker from "./serviceWorker";
import BankDashboard from './components/BankDashboard';

ReactDOM.render( < BankDashboard / > , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();