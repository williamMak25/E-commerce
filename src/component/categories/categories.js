import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './categories.css'

const Category = () => {
    const {type} = useParams();
    const [categoriesdata,setCategoriesData]= useState([]);
    console.log(categoriesdata)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${type}`)
        .then(res=>{
            return res.json();
        }).then(data=>{
           setCategoriesData(data)
        })
    },[type])

    return(
        <>
        <div className="secContainer">
            {categoriesdata.map((ite)=>{
                return(
                    
                    <div className="categories__container" key={ite.title}>
                    <img src={ite.image} alt="itemPhoto"></img>
                    <h1 className='title'>{ite.title}</h1>
                    <p className='price'>$ {ite.price}</p>
                    <NavLink to={`/products/${ite.id}`}><button className='allItemBtn'>ItemDetail</button></NavLink>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Category;