import React from 'react';

const MealDetails = (props) => {
    console.log(props.mealDetails);
    const {strMeal,strArea,strCategory,strInstructions,strMealThumb} = props.mealDetails;
    return (
        <div>
            <h3>{strMeal}</h3>
            <img style={{width:'200px',}} src={strMealThumb} alt="" />
            <h4>{strArea}</h4>
            <h4>{strCategory}</h4>
            <p>{strInstructions}</p>
        </div>
    );
};

export default MealDetails;