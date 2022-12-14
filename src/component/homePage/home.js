import React from 'react'
import './home.css'
import { useEffect ,useState} from "react";
import { NavLink } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

const Home = () => {

    const [apidata,setApidata] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>{
        return res.json()
        
        })
        .then((data)=>{
          setApidata(data)
        })
      },[apidata])

 return(
    <SkeletonTheme baseColor='#454545'>
     <div className='container'>
    {apidata.map((items)=>{
        return(
           
                <div className='items__container'key={items.id}>
                    <img src={items.image} alt="itemPhoto"></img>
                    <h1 className='title'>{items.title}</h1>
                    <p className='price'>$ {items.price}</p>
                    <NavLink to={`/products/${items.id}`}><button className='allItemBtn'>ItemDetail</button></NavLink>
                    
                </div>
        )
    })}
    </div>
    </SkeletonTheme>
 )
}

export default Home;