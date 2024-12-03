import React from "react";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <Search placeholder={"Search a song of your choice"}/>
        <Button children={"Give Feedback"}/>
    </nav>
  );
}

export default Navbar;
