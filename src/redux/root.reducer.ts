import { combineReducers } from "redux";
import peopleReducer from "./people/people.reducer";

const rootReducer = combineReducers({
  people: peopleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
