import { useState } from "react";

function ListingsForm({ onAddItem}) {
    const [formState, setFormState] = useState({
        name: "",
        price: "",
        image: "",
        description: ""
      });

    function handleChange(event){
        setFormState((prevFormState) => {
            return {
                ...prevFormState,
                [event.target.name]: event.target.value,
            };
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        fetch ("http://localhost:3000/items", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify({...formState}),
        })
        .then (res => res.json())
        .then((newItem) => {onAddItem(newItem); 
                setFormState ({
                    name: "",
                    price: "",
                    image: "",
                    description: ""
                });
                });
            
    };


    return(
        <div className="additem">
            <form onSubmit={handleSubmit} autoComplete="off" className="addlistings">
                    <h2 className="h2Form">Add a New Listing </h2>

                    <div className="formitem">                
                        <input onChange={handleChange} type="text" id="yourname" placeholder="Name of listing..." style={{height:25, width:250}} name="title" value={formState.name}/>
                    </div>

                    <div className="formitem">                
                        <input type="text" id="name" placeholder="Price..." name="poster" style={{height:25, width:250}} value={formState.price} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <input type="text" id="image" placeholder="Image..." style={{height:25, width:250}} name="releaseYear" value={formState.image} onChange={handleChange}/>
                    </div>

                    <div className="formitem">                        
                        <textarea id="review" name="summary" placeholder="Description.." style={{height:40, width: 250}} value={formState.description} onChange={handleChange}></textarea>
                    </div>
                

                    <div className="formitem">
                        <button type="submit">Submit</button> 
                    </div>   
                </form>
        </div>
    );

}
export default ListingsForm;