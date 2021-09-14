import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AddClass from "./AddClass";

const Header = ({ addClass }) => {
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();

  const signout = () => {
    localStorage.clear();
    history.push("/");
  };

  const menu = () => {
    setDropdown(!dropdown);
  };

  const toggleForm = () => {
    addClass(true);
  };

  return (
    <div className="container-fluid">
      <div
        className="fixed-top d-flex justify-content-around container-fluid py-1"
        style={{ backgroundColor: "#4B8077" }}
      >
        <Link to="/dashboard" className=" text-decoration-none p-1">
          <span className="mt-2 text-white logo display-5">Class Manager</span>
        </Link>
        <div className="d-flex">
          <button className="btn text-white" onClick={toggleForm}>
            <h3>+</h3>
          </button>
          <br />
          <div className="dropdown-btn mt-2">
            <button className="btn text-white" onClick={menu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-down-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                />
              </svg>
            </button>
            {dropdown && (
              <div className="position-absolute border text-dark d-flex flex-column text-decoration-none mt-3 px-3">
                <div className="d-block btn px-3 py-2 border-bottom">
                  Profile
                </div>
                <div className="d-block btn px-3 py-2 border-bottom">Help</div>
                <div className="d-block btn px-3 py-2">
                  <Link
                    to="/"
                    onClick={signout}
                    className="text-decoration-none text-black"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
