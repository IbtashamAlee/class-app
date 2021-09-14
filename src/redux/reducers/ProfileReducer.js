export const setProfileReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_PROFILE":
      return { ...state, ...payload };
    default:
      return state;
  }
};
