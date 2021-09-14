import { combineReducers } from "redux";
import { setProfileReducer } from "./ProfileReducer";

const reducers = combineReducers({
  profile: setProfileReducer,
});

export default reducers;
