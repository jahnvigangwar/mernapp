import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()
    const handleLogin = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/api/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json()
        console.log(json);
         
        if(!json.success){
            alert("enter valid credentials")
        }

        if(json.success){
          localStorage.setItem("authToken", json.authToken);
          console.log(localStorage.getItem("authToken"))
          navigate("/");
      }
        }
        const onChange = (event) =>{
            setCredentials({...credentials, [event.target.name]:event.target.value})
        }
    
  return (
    <>
    <div><Navbar/></div>
    
    <div className="container my-5">
      <form onSubmit={handleLogin}>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='email' 
            value={credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>


        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name='password' 
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <Link to="/createuser" className='m-3 btn btn-danger'>I am a new User</Link>
      </form>
      </div>
    </>
  );
}
 