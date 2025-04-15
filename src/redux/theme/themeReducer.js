const initialState = {
  mode: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.mode === "light" ? "dark" : "light";
      document.documentElement.className = newTheme;
      return { ...state, mode: newTheme };
    default:
      return state;
  }
};

export default themeReducer;
