import React from "react";
import { useStateValue } from "./StateProvider";
import "../css/checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div>
        <div className="checkout__imgContainer">
          <img
            className="chekout__ad"
            src="https://m.media-amazon.com/images/G/01/BSP/brand-banner/US/d/amazonbasics_desktop.jpg"
            alt=""
          />
        </div>

        {basket?.length === 0 ? (
          <div>
            <h2>your basket is empty</h2>
            <p>you have no item in cart</p>
          </div>
        ) : (
          <div>
            <h2>your basket is</h2>
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
        )}
      </div>
      <div>
        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
