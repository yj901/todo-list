import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CountList = styled.ul`
  margin-top: 70px;
  display: flex;
  align-items: center;
  gap: 8px;
  li {
    padding: 10px 18px;
    font-size: 1.6rem;
    color: var(--border2-color);
    background: var(--bg-color);
    border-radius: 100px;
  }

  @media screen and (max-width: 530px) {
    margin-top: 50px;
    gap: 4px;
    li {
      padding: 8px 14px;
      font-size: 1.3rem;
    }
  }
`;

const TodoCounts = () => {
  const todos = useSelector((state) => state.todo.todoList);
  const complete = todos.filter((todo) => todo.checked === true).length;

  return (
    <CountList>
      <li>총 개수 : {todos.length}</li>
      <li>완료 : {complete}</li>
      <li>미완료 : {todos.length - complete}</li>
    </CountList>
  );
};

export default TodoCounts;
