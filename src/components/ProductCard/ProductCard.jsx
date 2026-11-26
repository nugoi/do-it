import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

const ProductCard = ({title, imageUrl, Price}) => {
  return (
    <div className={styles.productCard}>
      <Image
        src={imageUrl}
        alt="Product Image"
        width={250}
        height={300}
        loading="lazy"
        className={styles.productImage}
      />
      <div className={styles.infoCont}>
        <h3>{title}</h3>
        <span>{Price + "$"}</span>
      </div>
    </div>
  );
};

export default ProductCard;