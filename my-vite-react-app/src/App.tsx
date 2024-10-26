import React, { useEffect } from "react";

import { Arrow } from "./components/Arrow";
import { Card } from "./components/Card";
import { Calculator } from "./components/Calculator";
import { InputContainer } from "./components/InputContainer";
import { OutputContainer } from "./components/OutputContainer";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;



export function App() {
  return (
    <>
      <Container>
        <InputContainer />
        <Calculator />
        <OutputContainer />
      </Container>
      {/* <Card  heading='Function1' nextFunction="Function1"/>
    <Arrow
      startPoint={startPoint}
      endPoint={mousePosition}
      config={{
        arrowColor: "green",
        strokeWidth: 4,
        controlPointsColor: "#aaa",
      }}
    /> */}
    </>
  );
}
