import React from 'react';
import style from './nav.module.css'
import { Link } from 'react-router-dom'
function Nav(){
    const navStyle={color:'white'}
 return(
     <div className={style.nav}>
         <h1>Hello Nav</h1>
         <ul className={style.navlinks}>
            <Link style={navStyle} to="/">
                <li >Home</li>
             </Link>
             <Link style={navStyle} to="/Shop">
                <li >Shop</li>
             </Link>
             <Link style={navStyle} to="/about">
                <li>About</li>
             </Link>
             <Link style={navStyle} to="/contact">
                <li>Contact</li>
             </Link>
             
            
         </ul>
    </div>
 ) 
}

export default Nav