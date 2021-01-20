import React from "react";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar ">
        <a className="navbar-brand">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
            alt="logo"
          />
          Keep Tasks
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
          />
        </form>
      </nav>
    </>
  );
};

export default Navbar;
