import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";

import Checkout from "./components/Checkout";
import { auth } from "./components/Firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HSxuFKUROjIkNmyy7tegkKiRybAgaaWnGp0oQ9Z8ds0kaW5ODTVzLNbbYbYpLWIIWT8gihdYiXFECUSgfjPQ9s6006Ujb7Gde"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);
  console.log("uuser is>>>", user);
  console.log("uuser is>>>", user?.email);

  // https://clone-be4f9.web.app/

  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>{" "}
        <Route path="/login">
          <Login />{" "}
        </Route>{" "}
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>{" "}
        <Route path="/">
          <Header />
          <Home />
        </Route>{" "}
      </Switch>{" "}
    </Router>
  );
}

export default App;
