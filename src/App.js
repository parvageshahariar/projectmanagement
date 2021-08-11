import React, {useEffect, useState} from "react";

import './App.css';
import Home from './Home'
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import Contact from './Contact'
import ItemDetails from './ItemDetails'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
const App = () => {
 const APP_ID = "47716c62";
 const APP_KEY = "e90a247b3cb9371b057ab3fdc95b5395";
 const apiAccesspoint = " https://api.edamam.com/search";

const [recipes, setRecipes] = useState([])
const [search, setSearchValue] = useState('');
const [query, setquery] = useState('chicken');
const exampleRequest = apiAccesspoint+`?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

useEffect(()=>{
  getRecipes()
},[query])

const getRecipes = async () =>{
  const response = await fetch(exampleRequest);
  const data = await response.json();
  setRecipes(data.hits)
}
const updateSerch = (e) =>{
  setSearchValue(e.target.value)
  //console.log(search)
}
const getSearch = (e)=>{
  e.preventDefault();
  setquery(search)
  console.log(search)
}
  return (
    
    <div className="App">
      <Router>
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/shop" exact component={Shop} />
      <Route path="/shop/:id" component={ItemDetails} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
</Switch>
     </Router>
      
     
    </div>
 
  );
}


export default App;
