import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import './Meal.css'

const Meal = (props) => {
    //console.log(props.meal);

    const {strMeal,strMealThumb } = props.meal;
    const {meal, handleDetails} = props;
    const element = <FontAwesomeIcon icon={faCalendarDay} />

    return (
        <div className='meal'>
          <h3>{strMeal}</h3>
          <img style={{width:'200px',}} src={strMealThumb} alt="" />
          <button onClick={()=>handleDetails(meal)} className='btn btn-primary d-block m-2'>{element} Details</button>  
        </div>
    );
};

export default Meal;