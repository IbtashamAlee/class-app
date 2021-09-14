const SET_CLASSES = "SET_CLASSES";

const setClasses = (classes) => {
  return {
    type: SET_CLASSES,
    payload: classes,
  };
};

export default setClasses;
