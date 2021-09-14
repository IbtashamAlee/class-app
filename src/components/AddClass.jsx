import React, { useState } from "react";
import axios from "axios";
import qs from "qs";

const AddClass = ({ addClass }) => {
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [details, setDetails] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();

    if (!name || !section || !details) {
      setAlert(true);
    } else {
      let classData = { name, section, details };
      axios({
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          Accept: "application/json",
        },
        data: qs.stringify(classData),
        url: "/classes/",
      })
        .then((response) => {
          if (response.status == 200) {
            setName("");
            setSection("");
            setDetails("");
            removeForm();
          }
        })
        .catch((err) => {
          if (err) {
            console.log("Not found");
          }
        });
    }
  };

  const removeForm = () => {
    addClass(true);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{ height: "100vh", backgroundColor: "grey" }}
    >
      <div
        className="conatiner"
        style={{ backgroundColor: "#4B8077", width: "450px" }}
      >
        <div className="mt-3">
          <span className="text-white h3">Add Class</span>
        </div>
        <form onSubmit={submitHandle}>
          <input
            className="py-2 w-75 m-3 rounded-3 border border-none"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className="py-2 w-75 m-3 rounded-3 border border-none"
            type="text"
            placeholder="Section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
          <br />
          <input
            className="py-2 w-75 m-3 rounded-3 border border-none"
            type="text"
            placeholder="Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <br />
          <button
            className="btn px-3 my-3 text-white fw-bold mx-1"
            style={{
              backgroundColor: "#F2962F",
              borderRadius: "10px",
            }}
            type="button"
            onClick={removeForm}
          >
            cancel
          </button>
          <button
            className="btn px-3 my-3 text-white fw-bold"
            style={{
              backgroundColor: "#F2962F",
              borderRadius: "10px",
            }}
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
