import React from "react";
import styled from "styled-components";

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
`;

const TodoCounts = () => {
  return (
    <CountList>
      <li>총 개수 : 3</li>
      <li>완료 : 2</li>
      <li>미완료 : 1</li>
    </CountList>
  );
};

export default TodoCounts;
