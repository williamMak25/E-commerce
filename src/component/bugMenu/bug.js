import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './bug.css'
const Bug = () => {
    const [burgerClass,setBurgerClass] = useState('burger-bar unclicked');
    const [menuClass,setMenuClass] = useState('menu hidden');
    const [isMenuClicked,setMenuClicked] = useState(false);



    const handleClick = () => {
       if(!isMenuClicked){
        setBurgerClass('burger-bar clicked');
        setMenuClass('menu visible');
       }
       else{
        setBurgerClass("burger-bar unclicked");
        setMenuClass('menu hidden')
       }
       setMenuClicked(!isMenuClicked);
    }

    return(
        <>
       <div className="bar_container">
            <div className="bug__container"onClick={handleClick}>
                <div className={burgerClass} ></div>
                <div className={burgerClass} ></div>
                <div className={burgerClass} ></div>

            </div>
            <div className={menuClass}>
                <div className="content_container">
                <NavLink to='/login' className='login_tag'><span onClick={handleClick} style={{border:"none"}}>Log In</span></NavLink>
                <NavLink to='/signup'className='signup_tag'><span onClick={handleClick} style={{border:"none"}}>Sign Up</span></NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default Bug;