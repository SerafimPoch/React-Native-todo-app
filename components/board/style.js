import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

export const TaskContainer = styled.View`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Task = styled.Text`
  margin-bottom: 15px;
`;
