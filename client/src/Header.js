import React from "react";
import {NavLink} from 'react-router-dom'

function Header({searchItems, searchInput, setShow, size}) {
    return(
      <header className="headerbackground"> 
        <nav>
          <div className="navbar">
            <NavLink exact className="button" to="/">
              Home
            </NavLink>
            <NavLink exact className="button" to="/listings">
              Shop
            </NavLink>
            <NavLink exact className="button" to="/listings/new">
              Sell
            </NavLink>
            <NavLink exact className="button" to="/login">
              User Login
            </NavLink>
        <span className="my_shop" onClick={() => setShow(true)}>
          WeList
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="cart-icon"></i>
          </span>
          <span>{size}</span>
      </div>
          </div>
        </nav>
      </header>
    );
  }

export default Header;