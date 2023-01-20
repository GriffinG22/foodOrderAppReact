import React from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const priceFormatted = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.descrip}</div>
            <div className={classes.price}>{priceFormatted}</div>
        </div>
        <div>
            <MealItemForm id={props.id} />
        </div>
    </li>
  )
}

export default MealItem;