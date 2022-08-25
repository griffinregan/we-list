import React from "react";

function ListingCard({item, deleteById}) {


function handleDelete(id) {
  fetch ("http://localhost:6001/listings/" + id, {
    method: "DELETE"
  })
  deleteById(id)
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={"description"} />
      </div>
      <div className="details">
    
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={() => handleDelete(item.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
