import React from "react";
import "../css/subtotal.css";
import CurrenyFormat from "react-currency-format";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { getBasketPrice } from "./Reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrenyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                subTotal({basket.length} items:{" "}
                <strong>{`N${getBasketPrice(basket)}`}</strong>)
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> the order contains this gift
              </small>
            </>
          );
        }}
        thousandSeperator={true}
        prefix={"N"}
        displayType={"text"}
        value={getBasketTotal(basket)}
        decimalScale={2}
      />

      <button>proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
