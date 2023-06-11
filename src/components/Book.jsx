import React from "react";
import styles from "./Book.module.css";

function Book({ name, author, price, imageUrl }) {
  return (
    <div className={styles.book__card}>
      <img className={styles.book__image} src={imageUrl} alt="Book" />
      <div className={styles.book__info}>
        <span className={styles.book__title}>{name}</span>
        <p className={styles.book__author}>{author}</p>
        <p className={styles.book__price}>${price}</p>
        <button className={styles.book__button}>Add to cart</button>
      </div>
    </div>
  );
}

export default Book;
