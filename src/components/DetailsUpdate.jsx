import React, { useState } from "react";
import qs from "qs";
import axios from "axios";

const DetailsUpdate = ({ classId, detailId, endEditForm, RULData }) => {
  const [updatedValue, setUpdatedValue] = useState("");
  const [alert, setAlert] = useState(false);

  const update = (e) => {
    e.preventDefault();
    if (!updatedValue) {
      setAlert(true);
    } else {
      const Data = {
        class_id: classId,
        [`${RULData}_id`]: detailId,
        [`${RULData}`]: updatedValue,
      };
      axios({
        method: "PUT",
        headers: {
          "content-type": "application/x-www-form-urlencoded",

          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          Accept: "application/json",
        },
        data: qs.stringify(Data),
        url: `/classes/${RULData}`,
      })
        .then((response) => {
          if (response.status == 200) {
            console.log("updated");
            endEditForm();
          }
        })
        .catch((err) => {
          if (err) {
            console.log("Not found");
          }
        });
    }
  };

  const endForm = () => {
    return endEditForm(false);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{
        height: "100vh",
        backgroundColor: "rgba(75, 128, 119,0.4)",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1",
      }}
    >
      <div
        className="position-relative conatiner"
        style={{ backgroundColor: "#4B8077", width: "450px" }}
      >
        <div className="mt-3">
          <span className="text-white h3">Update </span>
        </div>
        <form onSubmit={update} className="d-flex">
          <input
            type="text"
            className="p-2 w-75 m-3 rounded-3 border border-none text-black fw-bold"
            value={updatedValue}
            onChange={(e) => setUpdatedValue(e.target.value)}
          />
          <button
            className="btn px-3 my-3 text-white fw-bold mx-2"
            style={{
              backgroundColor: "#F2962F",
              borderRadius: "10px",
            }}
            type="submit"
          >
            Update
          </button>
        </form>
        <button
          className="btn px-3 my-3 text-white fw-bold"
          style={{
            backgroundColor: "#F2962F",
            borderRadius: "10px",
          }}
          type="button"
          onClick={endForm}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DetailsUpdate;
