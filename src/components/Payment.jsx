import React, { useState } from "react";
import "../css/payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrenyFormat from "react-currency-format";

import { getBasketTotal } from "./Reducer";
import { getBasketPrice } from "./Reducer";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <h1>
        Checkout (<Link to="/checkout"> {basket?.length} items)</Link>
      </h1>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>lagos nigeria</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review item and deliver</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>payment method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrenyFormat
                  renderText={(value) => {
                    return (
                      <>
                        <p>
                          OrderTotal({basket.length} items:{" "}
                          <strong>{value}</strong>)
                        </p>
                      </>
                    );
                  }}
                  thousandSeperator={true}
                  prefix={"N"}
                  displayType={"text"}
                  value={getBasketTotal(basket)}
                  decimalScale={2}
                />
                <button disabled={disabled || processing || succeeded}></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
