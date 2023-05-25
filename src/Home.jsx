import React from "react";
import { Main } from "./components/Main";
import { Categories } from "./components/Categories";
import { Product } from "./components/Product";
import { Newsletter } from "./components/Newsletter";
import { About } from "./components/About";

const Home = ({ products, handleClick }) => {
  return (
    <>
      <Main />
      <Categories />
      <Product products={products} handleClick={handleClick} />
      <About />
      <Newsletter />
    </>
  );
};

export default Home;
