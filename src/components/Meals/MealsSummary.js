import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>A Taste of Portugal<br/>delivered to your door</h2>
      <p>
        Choose from a selection of traditional and contemporary dishes and enjoy
        Portugal from the comfort of your home.
      </p>
      <p>
        All our meals are cooked to order from the freshest ingredients,
        perfectly curated by our Portuguese chefs!
      </p>
    </section>
  );
};
export default MealsSummary;
