import React from "react";
import styles from "@/app/products/page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";

const ProductPage = async () => {
  //  "use cache";
  //სერვერის მხარეს fetching:

  const Products = await fetch("https://fakestoreapi.com/products");
  const ParsedData = await Products.json();

  //client-ის მხარის fetching:


  return (
    <main className={styles.mainCont}>
      <h1>Products list</h1>
      <div className={styles.productListCont}>
        {ParsedData?.map((Product, index, array) => {
          return (
            <ProductCard
              title={Product.title}
              imageUrl={Product.image}
              Price={Product.price}
            />
          );
        })}
      </div>
    </main>
  );
};

export default ProductPage;
