
import { createUserWithEmailAndPassword} from "firebase/auth";
import React, { useState} from "react";
import { Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import './signup.css'

const SignUp = ()=> {
    const  [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConfirm,setComfirmPassword] =useState('')
    const [error,seterror] = useState('')
    const [loading,setloading] = useState(false)

  async function HandleSubmit(e){
    e.preventDefault()
    
    createUserWithEmailAndPassword(auth,email,password)
    .then((recndial)=>{
       console.log( recndial.user)
    })
    .catch((err)=>{
        console.log(err.message)
    })
    if(passwordConfirm !== password){
         seterror('password is not match')
    }
    setloading(false)
     
}  


    return(
        <>
        <div className="signUp__container">
            {error && <Alert variant="danger">{error}</Alert>}
            <form className="signup__form" onSubmit={HandleSubmit}>
            <h1>Sign Up Your Account</h1>
               <div className="email__container"> 
                    <label>Email</label>
                    <input type="email" value={email}onChange={(e)=>setEmail(e.target.value)}/>
               </div>
               <div className="password__container">
                    <label>Create Password</label>
                    <input type='text' value={password}onChange={(e)=>setPassword(e.target.value)}/>
                    <label>Confirm Password</label>
                    <input type='text' value={passwordConfirm}onChange={(e)=>setComfirmPassword(e.target.value)}/>
               </div>
               <input type='submit' className="signup__btn" disabled={loading}/>
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