import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./Cart";
import Header from "./Header";
import Search from "./Search";
import ListingsContainer from "./ListingContainer"
import ListingsForm from './ListingsForm';
import ListingDetails from './ListingDetails';

const MainPage = ({ currentUser, setCurrentUser, listings, setListings, searchInput, setSearchInput }) => {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };


  function deleteById(id) {
    const filteredListings = listings.filter(listing => listing.id !== id)
    setListings(filteredListings)
  }


  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


    return (
      <div>
        <Search />
        <ListingsContainer listings={displayedListings} deleteById={deleteById}/>
      </div>
    )
  }

export default MainPage