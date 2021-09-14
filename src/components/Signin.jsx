import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import qs from "qs";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  let history = useHistory();

  const submitHandle = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setAlert(true);
    } else {
      let user = { email, password };
      axios({
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify(user),
        url: "/users/signin",
      })
        .then((response) => {
          if (response.status == 200) {
            localStorage.setItem("access_token", response.data.access_token);
            setEmail("");
            setPassword("");
            setAlert("");
            history.push("/dashboard");
          }
        })
        .catch((err) => {
          if (err) {
            console.log("Not found");
          }
        });
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
