import React, {useEffect, useState} from 'react';
import style from './nav.module.css'
import Recipe from './Recipe'
import { Link } from 'react-router-dom'

    const Home = () => {
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
 return(
     <div>
          <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSerch}></input>
        <button className="search-button"  type="submit" >Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
            key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
        />
      )


      )}
      </div>
    </div>
 ) 
}

export default Home