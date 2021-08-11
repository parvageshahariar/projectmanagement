import React, {useState, useEffect} from 'react';
import style from './shop.module.css'
import {Link} from 'react-router-dom';
const ItemDetails =(match)=>{
    useEffect(()=>{
        fetchUpcomingItems();
    },[])
    console.log(match)
    const [item, setitem] = useState({
        images:{}
});
    const fetchUpcomingItems  = async ()=> {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.match.params.id}`)
        const item = await data.json();
        setitem(item.data.item);
        console.log(item.data.item)
       
    }
 return(
     <div className={style.shop}>
      
          <h1>{item.name}</h1>
          <img src={item.images.background} alt={item.name}></img>
       
    </div>
 ) 
}

export default ItemDetails