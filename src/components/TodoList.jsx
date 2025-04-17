import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todoList);
  const filterKeyword = useSelector((state) => state.todo.searchTxt);

  return (
    <div>
      {todos &&
        todos
          .filter((item) =>
            filterKeyword !== "" ? item.todo.includes(filterKeyword) : true
          )
          .map((item) => <TodoItem item={item} key={item.id} />)}
    </div>
  );
};

export default TodoList;
