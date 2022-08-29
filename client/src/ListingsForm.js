import React, { useState } from "react";

function ListingsForm({ handleAddListing }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name: name, price: price, image: image, description: description };

    fetch("/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
      .then(res => res.json())
      .then((data) => {
        console.log("new item added");
        handleAddListing(data)
      });
  };

  return (
    <div className="group">
      <form className="form-group" onSubmit={handleSubmit}>
        <h2> Create Item Form </h2>
        <div className="form">
          <label>Name </label>
          <input
            type="text"
            required
            value={name}
            style={{ height: 25, width: 250 }}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form">
          <label>Price </label>
          <input
            type="text"
            required
            value={price}
            style={{ height: 25, width: 250 }}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form">
          <label>Image </label>
          <input
            type="text"
            required
            value={image}
            style={{ height: 25, width: 250 }}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form">
          <label>Description </label>
          <textarea
            required
            value={description}
            style={{ height: 40, width: 250 }}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" onClick={handleSubmit} className="btn-primary">
          {" "}
          Add Item!{" "}
        </button>
      </form>
    </div>
  );
}

export default ListingsForm;
