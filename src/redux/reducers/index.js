import { combineReducers } from "redux";
import { setProfileReducer } from "./ProfileReducer";
import { setClassReducer } from "./ClassReducer";
import { setAnnouncementsReducer } from "./AnnouncementReducer";
import { setTodosReducer } from "./TodoReducer";

const reducers = combineReducers({
  profile: setProfileReducer,
  allClasses: setClassReducer,
  announcements: setAnnouncementsReducer,
  todos: setTodosReducer,
});

export default reducers;
