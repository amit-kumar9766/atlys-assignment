import { Dot } from "./Dots";
import styled from "styled-components";

const Container = styled.div`
  width: max-content;
  position: absolute;
  top: 250px;
  z-index: 2;
  background-color:white;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const InputContainer = () => {
  return (
    <Container>
      <label>Input</label>
      <FlexContainer>
        <input></input>
        <Dot />
      </FlexContainer>
    </Container>
  );
};
