import React from "react";
import "../css/checkoutProduct.css";
import star from "../img/staremoji.png";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>N</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return (
                <span>
                  <img className="product__star" src={star} alt="" />
                </span>
              );
            })}
        </div>
        <button className="checkoutProduct__remove" onClick={removeFromBasket}>
          remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
