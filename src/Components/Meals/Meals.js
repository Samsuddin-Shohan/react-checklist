import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import MealDetails from '../MealDetails/MealDetails';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [mealDetails, setMealDetails] = useState({});
    const [url,setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    useEffect(()=>{

        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    },[url]);
   // console.log(meals);
   const handleDetails = (meal) =>{
       setMealDetails(meal);

   }
   const handleSearch = (event)=>{
       let searchText = event.target.value;
       setUrl('https://www.themealdb.com/api/json/v1/1/search.php?f=' + searchText);

   }
    return (
    <div>
            <div className='search-container'>
                <input type="text"
                onChange={handleSearch}
                placeholder='Search Product'
                />
            </div>
        <div className='meal-list'>
        <div className='meals'>
           {
               meals.map(meal => <Meal 
                key = {meal.idMeal}
                meal = {meal}
                handleDetails = {handleDetails}>
                </Meal>)
           }
        </div> 
        <div className='details'>
            <MealDetails 
            key = {mealDetails.key}
            mealDetails = {mealDetails}
            ></MealDetails>
        </div>           
        </div>
    </div>
       
    );
};

export default Meals;