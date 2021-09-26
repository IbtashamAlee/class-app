import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import qs from "qs";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [isTutor, setIsTutor] = useState(false);
  const [formAlert, setFormAlert] = useState(false);
  const [userAlert, setUserAlert] = useState(false);
  let history = useHistory();

  const submitHandle = (e) => {
    e.preventDefault();

    if (!email || !fullname || !password) {
      setFormAlert(true);
    } else {
      let user = { email, password, isTutor, fullname };

      axios({
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify(user),
        url: "/users/signup",
      })
        .then((response) => {
          if (response.status == 200) {
            setEmail("");
            setFullname("");
            setIsTutor(false);
            setPassword("");
            setFormAlert(false);
            history.push("/signin");
          }
        })
        .catch((err) => {
          if (err) {
            setUserAlert(true);
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
        <Link to="/signin" className="link-info text-decoration-none">
          Login with existing account
        </Link>
        {formAlert && (
          <span
            className="text-warning"
            style={{ color: "red", fontSize: "15px", fontWeight: "bold" }}
          >
            Please complete form
          </span>
        )}
        <form onSubmit={submitHandle}>
          <input
            className="py-2 w-75 m-3 rounded-3 border border-none"
            type="text"
            placeholder="Full name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <br />
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
          <div>
            <input
              type="checkbox"
              onChange={(e) => setIsTutor(e.target.checked)}
            />
            <span className="text-white mx-3">I'm a teacher</span>
          </div>
          <br />
          {userAlert && (
            <span
              className="text-warning"
              style={{ color: "red", fontSize: "15px", fontWeight: "bold" }}
            >
              User already exists!
            </span>
          )}
          <br />
          <button
            className="btn px-3 my-3 text-white fw-bold"
            style={{
              backgroundColor: "#F2962F",
              borderRadius: "10px",
            }}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
