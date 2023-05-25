import React from "react";

const Cart = ({ cartItems, handleClick, handleRemove, clear }) => {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="container">
        <div className="header">
          {cartItems.length === 0 && <h1>NO ITEMS!</h1>}

          {cartItems.length >= 1 && (
            <button className="trash" onClick={clear}>
              <i className="fa fa-trash"></i>
            </button>
          )}
        </div>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h2>{item.name}</h2>
                <p>
                  {item.price} * {item.quantity}
                </p>
                <div className="cart-button">
                  <button className="add" onClick={() => handleClick(item)}>
                    +
                  </button>
                  <button className="minus" onClick={() => handleRemove(item)}>
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
