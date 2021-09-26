import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import setTodos from "../redux/actions/TodoAction";
import qs from "qs";
import DetailsUpdate from "./DetailsUpdate";

const Todos = ({ classId }) => {
  const [todo, setTodo] = useState("");
  const [alert, setAlert] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [detailId, setDetailId] = useState("");

  const todos = useSelector((state) => state.todos.todos);

  const isTutor = useSelector((state) => state.profile.isTutor);

  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      url: `/classes/todos/${classId}`,
    })
      .then((response) => {
        if (response.status == 200) {
          dispatch(setTodos(response.data));
        }
      })
      .catch((err) => {
        if (err) {
          console.log("todos Not found");
        }
      });
  }, [alert, updateForm]);

  const submitHandle = (e) => {
    e.preventDefault();
    if (!todo) {
      setAlert(true);
    } else {
      const todoData = { class_id: classId, todo };
      axios({
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",

          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          Accept: "application/json",
        },
        data: qs.stringify(todoData),
        url: "/classes/todo",
      })
        .then((response) => {
          if (response.status == 200) {
            setTodo("");
            setAlert(true);
          }
        })
        .catch((err) => {
          if (err) {
            console.log("todos Not found");
          }
        });
    }
    setAlert(false);
  };

  const deletetodo = (id) => {
    const todoData = { class_id: classId, todo_id: id };
    axios({
      method: "DELETE",
      headers: {
        "content-type": "application/x-www-form-urlencoded",

        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        Accept: "application/json",
      },
      data: qs.stringify(todoData),
      url: "/classes/todo",
    })
      .then((response) => {
        if (response.status == 200) {
          console.log("deleted");
          setAlert(true);
        }
      })
      .catch((err) => {
        if (err) {
          console.log("todos Not found");
        }
      });
    setAlert(false);
  };

  const showEditForm = (id) => {
    setDetailId(id);
    setUpdateForm(true);
  };

  const endEditForm = () => {
    setUpdateForm(false);
  };

  return (
    <div>
      {updateForm && (
        <DetailsUpdate
          classId={classId}
          detailId={detailId}
          endEditForm={endEditForm}
          RULData="todo"
        />
      )}
      <div className="mt-3">
        {isTutor && (
          <form
            onSubmit={submitHandle}
            className="container d-flex flex-row justify-content-center"
          >
            <div>
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="p-2 "
                placeholder="Todo"
              />
            </div>
            <button
              type="submit"
              className="btn text-white fw-bold mx-3"
              style={{
                backgroundColor: "#F2962F",
                borderRadius: "10px",
              }}
            >
              Post
            </button>
          </form>
        )}
      </div>
      <br />
      <div className="container">
        {todos.length > 0 ? (
          todos.map((todo) => {
            return (
              <div
                key={todo.id}
                className="container d-flex flex-column justify-content-around border-bottom my-3"
                style={{ maxWidth: "600px" }}
              >
                <div className="container d-flex flex-row justify-content-around flex-wrap">
                  <div
                    className=" container h5 fw-bold text-justify"
                    style={{ wordWrap: "break-word" }}
                  >
                    {todo.todo}
                  </div>
                  <div>
                    {isTutor && (
                      <div>
                        <button
                          type="button"
                          className="btn p-1"
                          onClick={() => showEditForm(todo.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </button>
                        <button
                          className="btn p-1"
                          style={{ color: "red" }}
                          type="button"
                          onClick={() => deletetodo(todo.id)}
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
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No Todos</h2>
        )}
      </div>
    </div>
  );
};

export default Todos;
