import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import setProfile from "../redux/actions/ProfileAction";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import AddClass from "./AddClass";

const DashBoard = () => {
  const [addForm, setAddForm] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  let profile = useSelector((state) => state.profile);

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
  }, []);

  const getClasses = () => {
    axios({
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      url: "/classes",
    })
      .then((response) => {
        if (response.status == 200) {
          console.log(response);
        }
      })
      .catch((err) => {
        if (err) {
          console.log("Not found");
        }
      });
  };

  const addClass = () => {
    setAddForm(!addForm);
  };

  return (
    <>
      {addForm && <AddClass addClass={addClass} />}
      <div>
        <Header addClass={addClass} />
        <div></div>
      </div>
    </>
  );
};

export default DashBoard;
