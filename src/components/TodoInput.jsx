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
    color: var(--dark-color);
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

  @media screen and (max-width: 530px) {
    margin-bottom: 25px;
    justify-content: space-between;
    gap: 00px;
    .todoInput {
      flex: none;
      width: calc(100% - 49px);
      padding: 11px 18px;
      font-size: 1.5rem;
      &::placeholder {
        font-size: 1.5rem;
      }
    }
    button[type="submit"] {
      width: 39px;
      height: 39px;
      span {
        font-size: 2.5rem;
      }
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
  color: var(--dark-color);
  background: none;
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

  @media screen and (max-width: 530px) {
    margin-bottom: 10px;
    padding: 11px 0px;
    font-size: 1.5rem;
    &::placeholder {
      font-size: 1.5rem;
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
