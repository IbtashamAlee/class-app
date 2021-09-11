import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();

    console.log("email ", email);

    if (!email || !password) {
      setAlert(true);
    } else {
      setAlert(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div
      className="container-sm d-flex justify-content-center align-items-center bg-white"
      style={{ height: "100vh" }}
    >
      <div
        className="container d-flex flex-column text-center rounded-3"
        style={{ backgroundColor: "#4B8077", width: "450px" }}
      >
        <span className="mt-3 text-white logo display-5">Class Manager</span>

        <span
          className="fw-bold"
          style={{ marginTop: "10px", color: "#F2962F" }}
        >
          Sign up to your account
        </span>
        <span className="text-white">or</span>
        <Link to="/signup" className="link-info text-decoration-none">
          create new account
        </Link>
        {alert && (
          <span style={{ color: "red", fontSize: "12px" }}>
            Please complete form
          </span>
        )}
        <form onSubmit={submitHandle}>
          <input
            className="py-2 w-75 m-3 rounded-3 border border-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="py-2 w-75 m-3 rounded-3 border border-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Link to="/" className="link-info text-decoration-none">
            Forget your password?
          </Link>
          <br />
          <button
            className="btn px-3 my-3 text-white fw-bold"
            style={{
              backgroundColor: "#F2962F",
              borderRadius: "10px",
            }}
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
