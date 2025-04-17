let initialState = {
  todoList: [],
  searchTxt: "",
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TODO_ADD":
      const newState = {
        ...state,
        todoList: [...state.todoList, payload],
      };
      return newState;
    case "TODO_CHECKED":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === payload.id ? { ...todo, checked: payload.checked } : todo
        ),
      };
    case "TODO_DELETE":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload.id),
      };

    case "TODO_SEARCH":
      return {
        ...state,
        searchTxt: payload.todo,
      };
    default:
      return state;
  }
};

export default todoReducer;
