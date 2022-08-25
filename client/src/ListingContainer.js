import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteById}) {


    
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map((item) => (
          <ListingCard key = {item.id} item = {item} deleteById={deleteById}/>
        ))}
        
      </ul>
    </main>
  );
}

export default ListingsContainer;