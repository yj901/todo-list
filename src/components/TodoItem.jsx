import React from "react";
import styled from "styled-components";

const TodoItem = () => {
  return (
    <div>
      <div className="checkbox">
        <span class="material-symbols-rounded">check</span>
      </div>
      <h3>목업리스트</h3>
      <span className="todoDate">2025.04.15</span>
      <span class="material-symbols-rounded">delete</span>
    </div>
  );
};

export default TodoItem;
