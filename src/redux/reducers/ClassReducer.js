let initialState = {
  classes: [],
};

const setClassReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CLASSES":
      return { ...state, classes: payload };
    default:
      return state;
  }
};

export default setClassReducer;
