import React from "react";
import { NavLink } from "react-router-dom";
import './signup.css'

const SignUp = ()=> {

    return(
        <>
        <div className="signUp__container">
            <form className="signup__form">
            <h1>Sign Up Your Account</h1>
                <div className="name__container" >
                <label id="name">Name</label>
                    <input type="text" />
                    <input type="text" />
                </div>
               <div className="email__container"> 
                    <label>Email</label>
                    <input type="email" />
               </div>
               <div className="password__container">
                    <label>Create Password</label>
                    <input type='text' />
                    <label>Confirm Password</label>
                    <input type='text' />
               </div>
               <input type='submit' className="signup__btn"/>
               <div className="remake">
                    <p>Already Have a Account?</p>
                    <NavLink to="/login">Log In</NavLink>
               </div>
            </form>
        </div>
        </>
    )
}

export default SignUp;