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
`;

const Box = styled.div`
  padding: 45px;
  background: var(--box-color);
  border-radius: 10px;
  box-shadow: 0px 15px 50px 0px rgba(154, 166, 178, 0.15);
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
