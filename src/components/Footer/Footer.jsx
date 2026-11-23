import React from "react";
import styles from "./Footer.module.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.Footer}>©All Right Reserved | {year}</footer>
  );
};

export default Footer;
