import React, { useState } from 'react';

function Login({ setCurrentEmail }) {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
  
    const [setErrors] = useState([]);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        if (res.ok) {
          res.json().then((email) => {
            console.log(email);
            setCurrentEmail(email);
          });
        } else {
          res.json().then((errors) => {
            console.log(errors);
            setErrors(errors.errors);
          });
        }
      });
    };


    return (
        <div>id="login"
        <ul>
            <form>
            <label>Login
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
            className="login-btn"
            onClick={() => handleSubmit(formData)}
            Login
        </button>
    </div>
    )
}

export default Login;