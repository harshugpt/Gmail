import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Gmail</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
};

export default Header;
