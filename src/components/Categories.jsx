import React from "react";
import { CategoriesCard } from "./Card/CategoriesCard";

export const Categories = () => {
  return (
    <div className="categories" id="category">
      <h1>Categories</h1>
      <div className="container">
        <div className="card-span">
            <div className="card-1">
              <h2>CHICKEN BURGER</h2>
              <button>SHOP NOW</button>
              <img src="./Category-Image/burger.png" />
            </div>
          </div>
        <div className="card-column">
          <CategoriesCard name="PIZZA" image="./Category-Image/pizza.png" />
          <CategoriesCard
            name="FRENCH FRIES"
            image="./Category-Image/fries.png"
          />
        </div>
      </div>
    </div>
  );
};
