const todocreate = (content) => ({
  type: "TODO_ADD",
  payload: {
    id: Date.now(),
    todo: content,
    date: new Date().toLocaleDateString(),
    checked: false,
  },
});

const todoCheck = (checked, id) => ({
  type: "TODO_CHECKED",
  payload: {
    checked,
    id,
  },
});

const todoDelete = (id) => ({
  type: "TODO_DELETE",
  payload: {
    id,
  },
});

const todoSearch = (todo) => ({
  type: "TODO_SEARCH",
  payload: {
    todo,
  },
});

export const todoAction = { todocreate, todoCheck, todoDelete, todoSearch };
