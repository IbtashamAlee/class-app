import { combineReducers } from "redux";
import { setProfileReducer } from "./ProfileReducer";
import { setClassReducer } from "./ClassReducer";

const reducers = combineReducers({
  profile: setProfileReducer,
  classes: setClassReducer,
});

export default reducers;
