import React from "react";

export const CategoriesCard = (props) => {
  return (
    <div className="category">
      <div className="card">
        <div className="category-txt">
          <h2>{props.name}</h2>
          <button>SHOP NOW</button>
        </div>
        <div className="category-img">
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
};
