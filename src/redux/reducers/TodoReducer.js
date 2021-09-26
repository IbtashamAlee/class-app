let initialState = {
  todos: [],
};

export const setTodosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TODO":
      return { ...state, todos: payload };
    default:
      return state;
  }
};
