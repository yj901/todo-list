let initialState = {};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "a":
      return { ...state };
    default:
      return { ...state };
  }
};

export default todoReducer;
