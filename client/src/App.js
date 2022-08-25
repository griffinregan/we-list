import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Cart from "./Cart";
import Header from "./Header";
import Search from "./Search";
import ListingsContainer from "./ListingContainer"
import PageLogin from './PageLogin';
import ListingsForm from './ListingsForm';
import ListingDetails from './ListingDetails';


function App() {

const [listings, setListings] = useState([])
const [searchInput, setSearchInput] = useState("")
const [cart, setCart] = useState([]);

const handleClick = (item) => {
  if (cart.indexOf(item) !== -1) return;
  setCart([...cart, item]);
};


useEffect(() => {
  fetch("https://localhost:3000")
  .then (res => res.json())
  .then (data => setListings(data))
}, [])

function deleteById(id) {
  const filteredListings = listings.filter(listing => listing.id !== id)
  setListings(filteredListings)
}

function searchItems(type) {
  setSearchInput(type)
}

const handleChange = (item, d) => {
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].amount += d;

  if (arr[ind].amount === 0) arr[ind].amount = 1;
  setCart([...arr]);
};

const displayedListings = listings.filter(listing => listing.description.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <div className="App">
  <Routes>
    <Route exact path="/">
      <PageLogin/>
    </Route>
    <Route>
      <Header searchItems={searchItems} searchInput={searchInput} setListings={setListings} size={cart.length} />
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} handleClick={handleClick}/>
      <Routes>
        <Route exact path="/listings">
          <Search />
          <ListingsContainer listings={displayedListings} deleteById={deleteById}/>
        </Route>
        <Route exact path="/listings/new">
          <ListingsForm />
        </Route>
        <Route exact path="/listings/:id">
          <ListingDetails />
        </Route>
      </Routes>
    </Route>
  </Routes>
  </div>
  );
}

export default App;
