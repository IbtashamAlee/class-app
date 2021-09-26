let initialState = {
  announcements: [],
};

export const setAnnouncementsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case "SET_ANNOUNCEMENT":
      return { ...state, announcements: payload };
    default:
      return state;
  }
};
