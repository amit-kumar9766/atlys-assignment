import { Dot } from "./Dots";

import styled from "styled-components";

const Container = styled.div`
  width: max-content;
  position: absolute;
  top: 250px;
  z-index: 2;
  background-color:white;
  right:10px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const OutputContainer = () => {
  return (
    <Container>
      <label>Output</label>
      <FlexContainer>
        <Dot />
        <input></input>
      </FlexContainer>
    </Container>
  );
};
