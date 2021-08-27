import { Fragment } from "react";
import mealsImage from "../../assets/headerimg.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>A Tasca</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Portuguese dishes" />
      </div>
    </Fragment>
  );
};

export default Header;
