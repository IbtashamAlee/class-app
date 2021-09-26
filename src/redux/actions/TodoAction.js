const SET_TODO = "SET_TODO";

const setTodos = (todos) => {
  return {
    type: SET_TODO,
    payload: todos,
  };
};

export default setTodos;
