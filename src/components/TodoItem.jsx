import React from "react";
import styled from "styled-components";

const Todoitem = styled.div`
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
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
    font-weight: 400;
  }

  .todoDate {
    font-size: 1.4rem;
    margin-right: 5px;
    color: var(--border-color);
  }

  .deleteIcon {
    color: var(--border2-color);
    font-size: 3rem;
    font-weight: 200;
    cursor: pointer;
  }
`;

const TodoItem = () => {
  return (
    <Todoitem>
      <div className="checked">
        <div className="checkbox">
          <span class="checkIcon material-symbols-rounded">check</span>
        </div>
        <h3>목업리스트</h3>
      </div>
      <div>
        <span className="todoDate">2025.04.15</span>
        <span class="deleteIcon material-symbols-rounded">delete</span>
      </div>
    </Todoitem>
  );
};

export default TodoItem;
