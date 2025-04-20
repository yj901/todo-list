import styled from "styled-components";
import { useDispatch } from "react-redux";
import { todoAction } from "../redux/todo/todoAction";

const Todoitem = styled.div`
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    &:nth-child(1) {
      width: 69%;
    }
    &:nth-child(2) {
      width: 29%;
      justify-content: end;
    }
  }

  .checkbox {
    position: relative;
    margin-right: 10px;
    width: 18px;
    height: 18px;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    cursor: pointer;
    .checkIcon {
      font-size: 2.5rem;
      font-weight: 500;
      position: absolute;
      color: var(--accent-color);
      top: 50%;
      left: 50%;
      transform: translate(-40%, -60%);
      opacity: 0;
      visibility: hidden;
    }
  }

  .checked {
    .checkbox {
      .checkIcon {
        opacity: 1;
        visibility: visible;
      }
    }
    h3 {
      color: var(--border-color);
      text-decoration: line-through;
    }
  }

  h3 {
    font-size: 1.8rem;
    line-height: 1.2;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }

  .todoDate {
    font-size: 1.4rem;
    color: var(--border-color);
    width: 75px;
    white-space: nowrap;
  }

  .deleteIcon {
    color: var(--border2-color);
    font-size: 3rem;
    font-weight: 200;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: var(--accent-color);
    }
  }

  @media screen and (max-width: 530px) {
    padding: 10px 0;
    & > div {
      &:nth-child(1) {
        width: 67%;
      }
      &:nth-child(2) {
        width: 30%;
      }
    }
    .checkbox {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      .checkIcon {
        font-size: 2.3rem;
      }
    }

    h3 {
      font-size: 1.5rem;
      margin-right: 10px;
    }

    .todoDate {
      width: 63px;
      font-size: 1.2rem;
    }

    .deleteIcon {
      font-size: 2.5rem;
    }
  }
`;

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const todoChecked = () => {
    dispatch(todoAction.todoCheck(!item.checked, item.id));
  };

  const todoDelete = () => {
    dispatch(todoAction.todoDelete(item.id));
  };

  return (
    <Todoitem>
      <div className={item?.checked ? "checked" : ""}>
        <div className="checkbox" onClick={todoChecked}>
          <span className="checkIcon material-symbols-rounded">check</span>
        </div>
        <h3>{item.todo}</h3>
      </div>
      <div>
        <span className="todoDate">{item.date}</span>
        <span
          className="deleteIcon material-symbols-rounded"
          onClick={todoDelete}
        >
          delete
        </span>
      </div>
    </Todoitem>
  );
};

export default TodoItem;
