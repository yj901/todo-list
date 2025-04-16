import React from "react";
import styled from "styled-components";
import TopTitle from "../components/TopTitle";
import DateArea from "../components/DateArea";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
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
      </Box>
    </Container>
  );
};

export default Home;
