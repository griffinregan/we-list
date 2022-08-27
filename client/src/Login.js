import React, { useState } from 'react';

function Login({ setCurrentUser }) {
    const [formData, setFormData] = useState({
      name: "",
      password: "",
    });
  
    const [setErrors] = useState([]);
  
    const handleChange = (e) => {
      console.log("name", e.target.name)
      console.log("value", e.target.value)

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
          res.json().then((user) => {
            console.log(user);
            setCurrentUser(user);
          });
        } else {
          res.json().then((errors) => {
            console.log(errors);
            // setErrors(errors.errors);
          });
        }
      });
    };

    console.log(formData)
    return (
        <div id="login">
          <ul>
              <form>
                <label>Login
                  <input 
                    type="text" 
                    name="name"
                    placeholder="username"
                    value={formData.name} 
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
          <button className="login-btn"
              onClick={handleSubmit}>
              Login
          </button>
    </div>
    )
}

export default Login;