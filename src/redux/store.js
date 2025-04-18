import { createStore, combineReducers } from "redux";
import todoReducer from "./todo/todoReducer";
import themeReducer from "./theme/themeReducer";

const savedTodos = JSON.parse(localStorage.getItem("todoList")) || [];
const savedTheme = localStorage.getItem("theme") || "light";

const preloadedState = {
  todo: {
    todoList: savedTodos,
    searchTxt: "",
  },
  theme: {
    mode: savedTheme,
  },
};

const rootReducer = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer, preloadedState);

export default store;
