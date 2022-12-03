import React from "react";
import { NavLink } from "react-router-dom";
import './login.css';

const Login = () => {

    return(
        <>
        <div className="login__container">
            <form className="login__form">
                <h1>Log In Your Account</h1>
            <div className="email__container">
                <label>Email</label>
                <input type='email' placeholder="Email"/>
            </div>
            <div className="password__container">
                <label>Passsword</label>
                <input type='password' placeholder="Passsword"/>  
            </div>
            <button>Log In</button>
            <div className="remaketwo">
                <p>You Don't Have Any Account?</p>
                <NavLink to='/signup'>Sign Up</NavLink>
            </div>
            </form>
        </div>
        </>
    )
}
export default Login;