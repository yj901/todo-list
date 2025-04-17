import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { todoAction } from "../redux/todo/todoAction";

const Form = styled.form`
  margin-bottom: 38px;
  display: flex;
  justify-content: center;
  gap: 10px;
  .todoInput {
    flex: 1;
    padding: 14px 24px;
    border: none;
    border-radius: 100px;
    background: var(--bg-color);
    font-family: var(--freesentation);
    font-size: 1.6rem;
    font-weight: 300;
    &::placeholder {
      font-family: var(--freesentation);
      font-size: 1.6rem;
      color: var(--border-color);
      opacity: 1;
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
  button[type="submit"] {
    width: 47px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--accent-color);
    border-radius: 50%;
    cursor: pointer;
    span {
      font-size: 2.9rem;
      color: var(--box-color);
    }
  }
`;

const SearchInput = styled.input`
  margin-bottom: 14px;
  width: 100%;
  padding: 14px 0px;
  border: none;
  border-bottom: 1px solid var(--border-color);
  font-family: var(--freesentation);
  font-size: 1.6rem;
  font-weight: 300;
  &::placeholder {
    font-family: var(--freesentation);
    font-size: 1.6rem;
    color: #ccc;
    opacity: 1;
    transition: opacity 0.3s;
  }
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const TodoInput = () => {
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const todoSubmit = (e) => {
    e.preventDefault();

    if (content !== "") {
      dispatch(todoAction.todocreate(content));
      setContent("");
    }
  };

  const searchSubmit = (e) => {
    const value = e.target.value;
    setSearch(value);

    dispatch(todoAction.todoSearch(value));
  };

  return (
    <>
      <Form action="#" method="get" onSubmit={todoSubmit}>
        <input
          type="text"
          className="todoInput"
          placeholder="새 TODO 작성하기"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">
          <span className="material-symbols-rounded">add</span>
        </button>
      </Form>

      <SearchInput
        className="searchbar"
        type="text"
        value={search}
        onChange={searchSubmit}
        placeholder="검색어를 입력하세요"
      />
    </>
  );
};

export default TodoInput;
