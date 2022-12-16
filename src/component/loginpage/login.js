import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";




const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [user,setUser] = useState('')
    let navigate = useNavigate()

    const signin = (e) => {
       
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
    .then((cendital)=>{
     setUser(cendital.user.email)  
    })
    .catch((err)=> {
        console.log(err.message)
    })
    if(user !== email){
        alert('your email or password is incorrect')
        setEmail('')
        setPassword('')
    }if(user === email){
        alert(`Wellcome Back ${user}!`)
        navigate('/profile')
    }
    }
    return(
        <>
        <div className="login__container">
            <form className="login__form" onSubmit={signin}>
                <h1>Log In Your Account</h1>
            <div className="email__container">
                <label>Email</label>
                <input type='email'value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="password__container">
                <label>Passsword</label>
                <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>  
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