import React from 'react';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
        <h3>{props.name}</h3>
        <span className={classes.description}>{props.descrip}</span>
        <span className={classes.price}>{props.price}</span>
    </li>
  )
}

export default MealItem;