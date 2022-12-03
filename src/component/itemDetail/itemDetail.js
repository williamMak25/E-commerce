import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addItems } from "../../redux/slice";
import './itemDetail.css';


const ItemDetail = () => {
    const {id} = useParams()
    const [itemDetail,setItemDetail] = useState([])
    const dispatch = useDispatch
     useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
           return res.json();
        })
        .then(data=>{
            setItemDetail(data);
            console.log(data)
        })
    },[id])
    const targetToadd = (itemDetail) =>{
        dispatch(addItems(itemDetail))
    }
    return(
        <>
        <div className="itemDetail_container">
            <img src={itemDetail.image} alt={itemDetail.title} className="photo"/>
            <div className="item_content">
                <p className="item_title">{itemDetail.title}</p>
                <p className="item_category">Category - <span>{itemDetail.category}</span></p>
                <h1 className="item_description">{itemDetail.description}</h1>
                <p className="item_price">$ {itemDetail.price}</p>
                <button onClick={() => targetToadd(itemDetail)}>Add Cart</button>
               <NavLink to="/cart"><button>Go to Cart</button></NavLink>
            </div>
        </div>
        </>
    )
}
export default ItemDetail;