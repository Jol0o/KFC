import React from "react";

const Signup = ({ handleSubmit ,  handleChange}) => {
  return (
    <div className="signup">
      <div className="container">
        <div className="profile">
          <i className="fa-solid fa-user"></i>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />

          <button type="submit"> Login</button>

          <p>Or login using</p>

          <div className="social">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa fa-envelope"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
