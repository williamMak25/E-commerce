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
                <NavLink to='/login' className='login_tag'><span onClick={handleClick} style={{border:"none"}}>LogIn</span></NavLink>
                <NavLink to='/signup'className='signup_tag'><span onClick={handleClick} style={{border:"none"}}>SignUp</span></NavLink>
                    <span className="men" onClick={handleClick}><NavLink to="/category/men's clothing">Men's clothing</NavLink></span>
                    <span className="jewelery" onClick={handleClick}><NavLink to="/category/jewelery">Jewelery</NavLink></span>
                    <span className="electronics" onClick={handleClick}><NavLink to="/category/electronics">Electronics</NavLink></span>
                    <span className="women" onClick={handleClick}><NavLink to="/category/women's clothing">Women's clothing</NavLink></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Bug;