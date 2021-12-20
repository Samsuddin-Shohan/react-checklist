import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
    //console.log(props.meal);

    const {strMeal,strMealThumb } = props.meal;
    const {meal, handleDetails} = props;
    const element = <FontAwesomeIcon icon={faCalendarDay} />

    return (
        <div>
          <h3>{strMeal}</h3>
          <img style={{width:'200px',}} src={strMealThumb} alt="" />
          <button onClick={()=>handleDetails(meal)} style={{display:'block',backgroundColor: 'orangered',padding: '5px' ,margin: '10px'}}>{element} Details</button>  
        </div>
    );
};

export default Meal;