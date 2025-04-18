import GlobalStyles from "./styles/GlobalStyles.styles";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const todoList = useSelector((state) => state.todo.todoList);
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
