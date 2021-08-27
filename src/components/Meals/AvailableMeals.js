import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Bacalhau à Brás",
    description:
      "Hand shredded cod, golden onion and shoestring potatoes, bound together with organic eggs. Topped with black olives and in-house grown parsley",
    price: 34.44,
  },
  {
    id: "m2",
    name: "Feijoada",
    description: "Hearty bean, cabbage meat stew served with rice",
    price: 40.44,
  },
  {
    id: "m3",
    name: "Prego no Prato",
    description:
      "Thin steak served with fries and an egg drenched in housemade beer sauce",
    price: 15.44,
  },
  {
    id: "m4",
    name: "Dourada Grelhada",
    description:
      "Charcoal-grilled fish served with boiled potatoes, roasted peppers and fresh garden salad",
    price: 33.44,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
        id = {meal.id}
        key={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
