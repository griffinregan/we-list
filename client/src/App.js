import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {

const [listings, setListings] = useState([])

useEffect(() => {
  fetch("https://localhost:")
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
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route>
      <Header />
      <Switch>
        <Route exact path="/listings">
          <Search />
          <ShowsContainer/>
        </Route>
        <Route exact path="/listings/new">
          <ListingsForm />
        </Route>
        <Route exact path="/listings/:id">
          <ListingDetails />
        </Route>
      </Switch>
    </Route>
  </Switch>

      
      
      
      
      
      
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
