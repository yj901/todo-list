import { createStore, combineReducers } from "redux";
import todoReducer from "./todo/todoReducer";
import themeReducer from "./theme/themeReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
