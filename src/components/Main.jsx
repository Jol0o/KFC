import React from "react";
import Image from "../images/main.png";

export const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main-txt">
          <h1>KFC HOT FIRED CHICKEN</h1>
          <p>
            KFC (Kentucky Fried Chicken ) is an American fast food restaurnat
            chain headquartered.
          </p>
          <button>
            LEARN MORE
            <span>
              <i className="fa-solid fa-greater-than"></i>
            </span>
          </button>
        </div>
        <div className="main-img">
          <img src={Image} />
        </div>
      </div>
    </div>
  );
};
