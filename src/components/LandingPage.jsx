import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="lan-page">
      <div
        className="lan-page-body d-flex flex-column"
        style={{ backgroundColor: "#4B8077" }}
      >
        <div className="ps-5" style={{ marginTop: "8vw" }}>
          <span
            className="logo display-1 text-white"
            style={{ fontSize: "6vmax" }}
          >
            Class Manager
          </span>
          <Link
            to="/signin"
            className="position-fixed top-0 btn px-3 my-3 text-white fw-bold"
            style={{
              backgroundColor: "#F2962F",
              right: "15px",
              fontSize: "1.2vmax",
              borderRadius: "10px",
            }}
          >
            sign in
          </Link>

          <br />
          <span
            className="h4 mb-2 fw-bold"
            style={{ color: "#F2962F", fontSize: "2.5vw" }}
          >
            Stay in contact to teach and learn
          </span>
          <br />
          <Link
            to="/signup"
            className="btn text-white fw-bold px-3 my-3"
            style={{
              backgroundColor: "#F2962F",
              fontSize: "1.2vmax",
              borderRadius: "10px",
            }}
          >
            sign up
          </Link>
        </div>
      </div>
      <div className="description-body">
        <div className="d-flex flex-column-reverse flex-md-row justify-content-around align-items-center">
          <div className="h4 ">
            <span>Product description</span>
          </div>
          <div className="h2 p-3">
            <span className="p-title" style={{ color: "#F2962F" }}>
              Product
            </span>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
          <div className="h2 p-3">
            <span className="f-title" style={{ color: "#F2962F" }}>
              Features
            </span>
          </div>
          <div className="h4">
            <span>features description</span>
          </div>
        </div>
      </div>
      <div className="lan-page-footer text-center h3 mt-5">
        <span className="logo" style={{ color: "#4B8077" }}>
          Class Manager
        </span>
      </div>
    </div>
  );
};

export default LandingPage;
