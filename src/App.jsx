import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routeing from "./Routeing";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import data from "./Data";

function App() {
  const Products = data;
  const [cartItems, setCartItems] = useState([]);
  const [object, setObject] = useState({
    username: "",
    gmail:"",
    password: "",
  });

  console.log(object)

  function handleChange(event) {
    setObject(prevObject => {
      return {
        ...prevObject ,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.prevent.default;
  };

  const handleClick = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    return console.log("CLICK");
  };

  const handleRemove = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  function clear() {
    setCartItems([]);
  }

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routeing
        products={Products}
        cartItems={cartItems}
        handleClick={handleClick}
        handleRemove={handleRemove}
        clear={clear}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Footer />
    </Router>
  );
}
export default App;
