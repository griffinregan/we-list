import React from "react";
import {NavLink} from 'react-router-dom'

function Header() {
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
          </div>
        </nav>
      </header>
    );
  }

export default Header;