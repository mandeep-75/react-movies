import React from "react";
import "./Header.css";
import dragon from "../assets/dragon.svg";
function Header() {
  return (
    <div>
      <div className="main">
        <img className="img" src={dragon} alt="" />
        <h2>Made by Mandeep Singh </h2>
      </div>
    </div>
  );
}
export default Header;
