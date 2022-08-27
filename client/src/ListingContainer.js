import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteById, handleClick}) {


    
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map((item) => (
          <ListingCard key = {item.id} item = {item} deleteById={deleteById} handleClick={handleClick}/>
        ))}
        
      </ul>
    </main>
  );
}

export default ListingsContainer;