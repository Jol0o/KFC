import React from "react";
import { ProductsCard } from "./Card/ProductsCard";

export const Product = ({ products, handleClick }) => {
  return (
    <div className="product" id="product">
      <h1>Products</h1>
      <div className="container">
        {products.map((item) => (
          <ProductsCard
            key={item.id}
            products={item}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};
