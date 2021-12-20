import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import MealDetails from '../MealDetails/MealDetails';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [mealDetails, setMealDetails] = useState({});
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    },[]);
   // console.log(meals);
   const handleDetails = (meal) =>{
       setMealDetails(meal);

   }
    return (
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
    );
};

export default Meals;