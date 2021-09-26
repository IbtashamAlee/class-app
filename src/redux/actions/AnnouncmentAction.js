const SET_ANNOUNCEMENT = "SET_ANNOUNCEMENT";

const setAnnouncements = (announcements) => {
  return {
    type: SET_ANNOUNCEMENT,
    payload: announcements,
  };
};

export default setAnnouncements;
