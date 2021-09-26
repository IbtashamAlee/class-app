import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import setProfile from "../redux/actions/ProfileAction";
import setClasses from "../redux/actions/ClassAction";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import AddClass from "./AddClass";
import qs from "qs";
import ClassCode from "./ClassCode";

const DashBoard = () => {
  const [addForm, setAddForm] = useState(false);
  const [data, setData] = useState([]);
  const [classCode, setClassCode] = useState(false);
  const [id, setId] = useState("");
  const [deleted, setDeleted] = useState(false);

  const dispatch = useDispatch();

  let isTutor = useSelector((state) => state.profile.isTutor);

  useEffect(() => {
    axios({
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      url: "/users/me/profile",
    })
      .then((response) => {
        if (response.status == 200) {
          dispatch(setProfile(response.data));
        }
      })
      .catch((err) => {
        if (err) {
          console.log("Not found");
        }
      });
    getClasses();
  }, [addForm, deleted]);

  const getClasses = () => {
    axios({
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      url: "/classes/",
    })
      .then((response) => {
        if (response.status == 200) {
          dispatch(setClasses(response.data));
          setData(response.data);
        }
      })
      .catch((err) => {
        if (err) {
          console.log("profile Not found");
        }
      });
  };

  const addClass = () => {
    setAddForm(!addForm);
  };

  const deleteClass = (id) => {
    const classData = { class_id: id };
    axios({
      method: "DELETE",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      data: qs.stringify(classData),
      url: "/classes/",
    })
      .then((response) => {
        if (response.status == 200) {
          console.log("deleted");
          setDeleted(true);
        }
      })
      .catch((err) => {
        if (err) {
          console.log("classes Not found");
        }
      });
    setDeleted(false);
  };

  const setCode = (_id) => {
    setId(_id);
    showCode();
  };

  const showCode = () => {
    setClassCode(true);
  };

  const endCode = () => {
    setClassCode(false);
  };

  return (
    <>
      {addForm && <AddClass addClass={addClass} />}
      {classCode && <ClassCode endCode={endCode} id={id} />}

      <Header addClass={addClass} />
      <div className="container d-flex flex-wrap justify-content-around mt-5 pt-5">
        {data.map((cla) => {
          return (
            <div key={cla._id} className="m-3">
              <div className="card" style={{ width: "22rem" }}>
                <Link
                  to={`/class-details/${cla._id}`}
                  className="text-decoration-none text-black"
                >
                  <img src={cla.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">{cla.section}</h4>
                    <p className="card-text">{cla.details}</p>
                  </div>
                </Link>
                <div className="container d-flex flex-row justify-content-between">
                  <button
                    type="button"
                    className="btn px-2 my-2 text-white fw-bold mx-1"
                    style={{
                      backgroundColor: "#F2962F",
                      borderRadius: "10px",
                    }}
                    onClick={() => setCode(cla._id)}
                  >
                    Get Code
                  </button>
                  {isTutor && (
                    <button
                      className="btn p-1"
                      style={{ color: "red" }}
                      type="button"
                      onClick={() => deleteClass(cla._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DashBoard;
