import React from "react";

export const ProductsCard = ({ products, handleClick }) => {
  return (
    <div>
      <div className="items">
        <img src={products.image} />
        <h1>{products.name}</h1>
        <h2>{products.price}</h2>
        <span></span>
        <div className="btn" onClick={() => handleClick(products)}>
          <p>ADD TO CART</p>
          <button>
            <i className="fa-solid fa-greater-than"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
