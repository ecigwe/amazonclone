import React from "react";
import "../css/product.css";
import star from "../img/staremoji.png";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispath] = useStateValue();
  const addToBasket = () => {
    dispath({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>N</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return (
                <span>
                  <img className="product__star" src={star} />
                </span>
              );
            })}
        </div>
      </div>

      <div className="product__image">
        <img src={image} alt="" />
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
