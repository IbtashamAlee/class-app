import React, { useState } from "react";
import Announcement from "./Announcement";
import Header from "./Header";
import { useParams } from "react-router";
import Todos from "./Todos";

const ClassDetails = () => {
  const [announcements, setAnnouncements] = useState(true);
  const [todos, setTodos] = useState(false);
  const classId = useParams();

  const showAnnouncements = () => {
    setAnnouncements(true);
    setTodos(false);
  };

  const showTodos = () => {
    setTodos(true);
    setAnnouncements(false);
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <div className="constiner d-flex justify-content-center my-3">
        <div className="btn-group">
          <button
            type="button"
            className="btn px-3"
            style={{
              color: "#F2962F",
            }}
            onClick={() => showAnnouncements()}
          >
            <h5 className="mt-1 fw-bold">Announcements</h5>
          </button>
          <button
            type="button"
            className="btn px-3"
            style={{
              color: "#F2962F",
            }}
            onClick={() => showTodos()}
          >
            <h5 className="mt-1 fw-bold">Todos</h5>
          </button>
        </div>
      </div>
      <div className=" container d-flex flex-column justify-content-center">
        {announcements && <Announcement classId={classId.id} />}
      </div>
      <div>{todos && <Todos classId={classId.id} />}</div>
    </div>
  );
};

export default ClassDetails;
