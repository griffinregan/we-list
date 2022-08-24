import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {

const [listings, setListings] = useState([])
const [searchInput, setSearchInput] = useState("")

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

const displayedListings = listings.filter(listing => listing.description.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <div className="App">
  <Routes>
    <Route exact path="/listings">
      <Home/>
    </Route>
    <Route>
      <Header searchItems={searchItems} searchInput={searchInput}/>
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

      
      
      
      
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
