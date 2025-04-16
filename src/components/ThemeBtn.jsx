import React from "react";
import styled from "styled-components";

const ModeBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: var(--box-color);
  border-radius: 50%;
  width: 58px;
  aspect-ratio: 1;
  box-shadow: 0px 5px 10px 0px rgba(154, 166, 178, 0.15);
  cursor: pointer;
  span {
    font-size: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .light-mode {
    visibility: visible;
    opacity: 1;
    color: var(--sun-color);
  }
  .dark-mode {
    visibility: hidden;
    opacity: 0;
    color: var(--moon-color);
  }
`;

const ThemeBtn = () => {
  return (
    <ModeBtn>
      <span className="material-symbols-rounded light-mode">sunny</span>
      <span className="material-symbols-rounded dark-mode">dark_mode</span>
    </ModeBtn>
  );
};

export default ThemeBtn;
