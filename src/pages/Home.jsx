import React from "react";
import styled from "styled-components";
import TopTitle from "../components/TopTitle";
import DateArea from "../components/DateArea";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import TodoCounts from "../components/TodoCounts";

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 100px 0;

  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 50px 50px;
  }
`;

const Box = styled.div`
  padding: 45px;
  background: var(--box-color);
  border-radius: 10px;
  box-shadow: var(--shadow-color);
`;

const Home = () => {
  return (
    <Container>
      <TopTitle />
      <Box>
        <DateArea />
        <TodoInput />
        <TodoList />
        <TodoCounts />
      </Box>
    </Container>
  );
};

export default Home;
