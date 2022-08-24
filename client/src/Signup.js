import React, {useState} from 'react';

function Signup ({setCurrentEmail}){
    const [formData,setFormData]= useState({
        username: "",
        password: "",
    })
 
    const[error,setErrors]=useState([])
 
 console.log("error", error)
 const handleChange= (e)=> {
     setFormData({
         ...formData,
         [e.target.name]: e.target.value
     })
 }
 
 const handleSubmit = (e) => {
     e.preventDefault();
     fetch("/users",{
         method: "POST",
         headers: {
             "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
     }).then((res)=>{
         if(res.ok){
             res.json().then((email)=>{
                 console.log(email)
                 setCurrentEmail(email)
             });
         }else{
             res.json().then((errors)=>{
                 console.log("signup",errors.errors)
                 setErrors(errors.errors)
             })
         }
     })
 }
     
 
     return(
         <div>
         d="login"
        <ul>
            <form>
            <label>Signup
            <input 
            type="text" 
            name="email"
            placeholder="email"
            value={formData.email} 
            onChange={handleChange} 
            />
            </label>
            <label>Password
            <input 
            type="text" 
            name="password"
            placeholder="password"
            value={formData.password} 
            onChange={handleChange} 
            />
            </label>
            </form>
        </ul>
        <button>
            className="signup-btn"
            onClick={() => handleSubmit(formData)}
            Sign Up
        </button>
        </div>
     )
 }

export default Signup;