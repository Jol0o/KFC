import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./Home";
import Signup from "./components/Signup";

const Routeing = ({
  products,
  cartItems,
  handleClick,
  handleRemove,
  clear,
  handleSubmit,
  handleChange
}) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} handleClick={handleClick}  />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              products={products}
              cartItems={cartItems}
              handleClick={handleClick}
              handleRemove={handleRemove}
              clear={clear}
            />
          }
        />
        <Route
          path="/signUp"
          element={<Signup handleSubmit={handleSubmit} handleChange={handleChange}/>}
        />
      </Routes>
    </>
  );
};

export default Routeing;
