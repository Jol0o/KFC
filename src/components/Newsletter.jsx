import React from "react";

export const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <h1>JOIN OUR NEWSLETTER</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
          accusantium dolorum culpa tenetur officia nam et perferendis tempore
          cumque optio eos ut voluptatem odio esse animi sit, qui soluta
          dolorem!
        </p>
        <form action="">
          <input type="email" name="email" className="email" placeholder="Enter your email"/>
          <button>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};
