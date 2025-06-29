import React, { useState, useEffect } from 'react';
import { handleerror, handlesuccess } from '../utils';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function Login() {
  const navigate=useNavigate();
  const [loginfo, setloginfo] = useState({
    email: '',
    password: '',
  });

  function info(e) {
    const { name, value } = e.target;
    setloginfo({ ...loginfo, [name]: value });
  }

  useEffect(() => {
    console.log('Updated loginfo:', loginfo);
  }, [loginfo]);

  const sub =async (e) => {
    e.preventDefault();
    const { email, password } = loginfo;
    if (!email || !password) {
      return handleerror('All fields are required');
    }
    const url="http://localhost:8080/auth/login";
    try{
      const response=await fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(loginfo)
      });

      const result=await response.json();
      const {success,message,jwtToken,name}=result;
      if(!success){
        return handleerror(message);
      }
      else{
        handlesuccess('you have logged in successfully');
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('name',name);
        setTimeout(() => {
          navigate('/final');
        },1000);
      }
    }
    catch (error) {
      handleerror(error||'Something went wrong!');
      console.log(error);
    }

  };

  return (
    <div className="container">
      <form className="form" onSubmit={sub}>
        <h2 className="page">Login</h2>
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
        <button type="submit">Login</button>
        <span>Don't have an account?
          <Link to="/signup">Sign up</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Login;
