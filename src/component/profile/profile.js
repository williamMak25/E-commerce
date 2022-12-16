import React, { useState ,useEffect} from 'react'
import { onAuthStateChanged,signOut} from 'firebase/auth'
import { auth } from '../../firebase'
import './profile.css'
import { NavLink, useNavigate } from 'react-router-dom'

export const Profile = () => {
    const [logInUser,setLogInUser] = useState(null)
    const navigate = useNavigate();

    useEffect(()=>{
        const listen = onAuthStateChanged( auth,(user) => {
           if(user){
            setLogInUser(user)
           }
           else{
            setLogInUser(null)
           }
         })
         return () => {
            listen()
         }
     },[])
     const logOut = () => {
        signOut(auth)
        .then(()=>{
          navigate('/')
          console.log('sign out successful')
        })
        .catch(err => err.message)
     }

  return (
    <>
    <div className='profile'>
        <h1>Your Account</h1>
        <div>
          {logInUser ? 
          <div className='yesAcc'>
            <p>{`User : ${logInUser.email}`}</p>
            <button onClick={logOut}>Log Out</button>
            </div>
          :
          <div className='noAcc'>
              <img src='https://i.ibb.co/1zQGP7r/lady-with-megaphone.png' alt='p' className='photo'/>
            <h2>Please <NavLink to='/login'>Log In </NavLink>Your Account to Purchase</h2>
            <p>If you Don't Have a Account? Please <NavLink to='/signup'>SignUp</NavLink></p>
          </div>
        }</div>
    </div>
    </>
  )
}
