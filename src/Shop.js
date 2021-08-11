import React, {useState, useEffect} from 'react';
import style from './shop.module.css'
import {Link} from 'react-router-dom';
const Shop =()=>{
    useEffect(()=>{
        fetchUpcomingItems();
    },[])

    const [items, setitems] = useState([]);
    const fetchUpcomingItems  = async ()=> {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
        const items = await data.json();
        setitems(items.data);
        console.log(items.data)
       
    }
 return(
     <div className={style.shop}>
         {items.map(item =>(
             
           
             <h1 key={item.itemId}>
                <Link to={`/shop/${item.itemId}`}> {item.item.name}</Link>
                 </h1> 
         ))}
    </div>
 ) 
}

export default Shop