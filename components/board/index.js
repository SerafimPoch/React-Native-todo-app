import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "./boardContainer";
import { Text } from "react-native";
import { Container, Task, TaskContainer } from "./style";

const Board = ({ tasks }) => {
  return (
    <Container>
      {tasks.map((e, i) => {
        return (
          <TaskContainer>
            <Task key={i}>{e}</Task>
          </TaskContainer>
        );
      })}
    </Container>
  );
};

export default connect(
  mapStateToProps,
  null
)(Board);
