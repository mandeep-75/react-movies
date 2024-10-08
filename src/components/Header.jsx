import React from "react";
import "./Header.css";
import rocketsvg from "../assets/rocket.svg";
function Header() {
  return (
    <div>
      <div className="main">
        <img className="img" src={rocketsvg} alt="" />
        <h2>Made by mandeep Singh </h2>
      </div>
    </div>
  );
}
export default Header;
