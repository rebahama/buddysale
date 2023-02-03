import React from "react";
import pic from "../assets/background.jpg"
import { NavLink } from "react-router-dom";


const HomePage = () => {
  return (
    <div>
      <NavLink to="createaccount"> create account </NavLink>
      <div>
      <img src={pic} alt="sale"/>

      </div>
     
    </div>
  );
};

export default HomePage;
