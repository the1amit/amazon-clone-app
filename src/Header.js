import React from "react";
import "./Header.css";
import amlogo from "./images/amzn_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      console.log(user.email);
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={amlogo}></img>
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">
              Hello,&nbsp;
              {user ? user?.email : "Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/orders" >
          <div className="header_option">
            <span className="header_optionLineOne">Resurns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Try</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
