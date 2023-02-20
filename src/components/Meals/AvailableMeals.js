import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch('https://reacthttp-3d6c8-default-rtdb.firebaseio.com/Meals.json');
      const resData = await res.json();

      const loadedMeals = [];

      for ( const key in resData) {
        loadedMeals.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} descrip={meal.description} price={meal.price}/>);

  return (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
  )
}

export default AvailableMeals;