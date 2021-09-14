const SET_PROFILE = "SET_PROFILE";

const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    payload: profile,
  };
};

export default setProfile;
