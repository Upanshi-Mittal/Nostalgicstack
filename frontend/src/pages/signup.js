import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "./page.css";
import { handleerror, handlesuccess } from "../utils";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [signinfo, setsigninfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log(signinfo);
  }, [signinfo]);
  const info = (e) => {
    const { name, value } = e.target;
    setsigninfo({ ...signinfo, [name]: value });
  };
  const sub = async (e) => {
    e.preventDefault();
    const { name, email, password } = signinfo;
    if (!name || !email || !password) {
      return handleerror("All fields are required");
    }
    const url = "http://localhost:8080/auth/signup";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signinfo),
      });

      const result = await response.json();
      const {success, message,error} = result;
      if (success) {
        setTimeout(() => {
          navigate("/final");
        } , 1000);
      }
      else if(error){
        return handleerror(error);
      }
      else if(!success){ 
        return handleerror(message);
      }
    } catch (error) {
      handleerror(error);
    }
    return handlesuccess("Signup successful");
  };
  return (
    <div className="container">
      <form className="form" onSubmit={sub}>
        <h2 className="page">SignUp</h2>
        <div className="details">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            placeholder="name"
            onChange={info}
            name="name"
          />
        </div>
        <div className="details">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="email"
            onChange={info}
            name="email"
          />
        </div>
        <div className="details">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={info}
            name="password"
          />
        </div>

        <button type="submit">SignUp</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;
