import { Fragment } from "react";
import classes from "./Header.module.css";

import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>Sahoo Family Restaurant</header>
      <HeaderCartButton />
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
