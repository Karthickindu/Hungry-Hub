import React from "react";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
const dummy = [
  {
    id: "m1",
    name: "Hamburger",
    description: "The classic burger",
    price: 199.0,
  },
  {
    id: "m2",
    name: "Fried chicken",
    description: "American ,raw, meaty",
    price: 125.99,
  },
  {
    id: "m3",
    name: "Barbecue burger",
    description: "Special crispy chicken",
    price: 250.85,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green..",
    price: 175.0,
  },
  {
    id: "m5",
    name: "Samosa cake",
    description: "Indian Styled and tasty",
    price: 15.0,
  },
];
const AvailableMeals = () => {
  const mealsList = dummy.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
