import React from "react";
import Burger from '../images/main-burger.png'

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about-img">
            <img src={Burger} />
        </div>
        <div className="about-txt">
          <h2>ABOUT US</h2>
          <h1>KFC CHICKEN BURGER</h1>
          <p>
            Harlan sanders was born in 1890 and raised on a farm outside
            Heryville , Indiana (near lousiville , Kentucky ). When Sanders was
            5 years old , his father died , forcing his mother to work
          </p>
          <div className="btn">
            <p>LEARN MORE</p>
            <button>
              <i class="fa-solid fa-greater-than"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
