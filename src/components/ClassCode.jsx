import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ClassCode = ({ endCode, id }) => {
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
        className="position-fixed conatiner"
        style={{ backgroundColor: "#4B8077", width: "450px" }}
      >
        <div className="mt-3">
          <span className="text-white h3">Class code</span>
        </div>
        <input
          className="py-2 w-75 m-3 rounded-3 border border-none text-black fw-bold"
          disabled
          defaultValue={id}
        />
        <CopyToClipboard text={id}>
          <button
            className="btn px-3 my-3 text-white fw-bold mx-2"
            style={{
              backgroundColor: "#F2962F",
              borderRadius: "10px",
            }}
            type="button"
          >
            Copy
          </button>
        </CopyToClipboard>
        <button
          className="btn px-3 my-3 text-white fw-bold"
          style={{
            backgroundColor: "#F2962F",
            borderRadius: "10px",
          }}
          type="button"
          onClick={endCode}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ClassCode;
