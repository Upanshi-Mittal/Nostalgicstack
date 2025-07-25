import React from 'react'
import {Link} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import './page.css'
function Home() {
    return (
        <div className="container" style={{height:"60vh"}}>
            <h2>Home</h2>
            
                <Link to="/signup">
                    <button className="signup" style={{ color: "white" }}>
                        SignUp
                    </button>
                </Link>
            
                <Link to="/login">
                    <button className="login" style={{ color: "white" }}>
                        Login
                    </button>
                </Link>
            
            <ToastContainer/>
        </div>
    )
}

export default Home