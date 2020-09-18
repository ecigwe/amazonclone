import React from "react";
import "../css/header.css";

import amazonimg from "../img/amazonimg.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  console.log(basket);
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={amazonimg} alt="amazon" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Log out" : "log in"}
            </span>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prize</span>
          </div>
        </Link>
        <Link className="header__link">
          <div className="header__optionBasket">
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
            <ShoppingBasketIcon />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
