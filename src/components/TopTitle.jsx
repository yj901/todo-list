import React from "react";
import styled from "styled-components";
import ThemeBtn from "./ThemeBtn";

const Title = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

const Txt = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  font-weight: 600;
  font-family: var(--paperlogy);
  letter-spacing: 0.03em;
  @media screen and (max-width: 530px) {
    font-size: 2.4rem;
  }
`;

const TopTitle = () => {
  return (
    <Title>
      <Txt>TODOLIST</Txt>
      <ThemeBtn />
    </Title>
  );
};

export default TopTitle;
