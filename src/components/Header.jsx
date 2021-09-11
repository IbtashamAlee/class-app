import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid d-flex p-3 header">
      <Link to="/dashboard" className="header-logo">
        {" "}
        <h2>Class Orgnizer</h2>
      </Link>
      <div
        className="fixed-top d-flex justify-content-between container-fluid px-4 py-1 lan-page-head"
        style={{ backgroundColor: "#006989" }}
      >
        <span className="logo text-white h1 mt-3">Class Manager</span>
        <Link
          to="/signin"
          className="btn px-3 my-3 rounded-2"
          style={{ backgroundColor: "#F2962F" }}
        >
          <span className="text-white fw-bold h6">sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
