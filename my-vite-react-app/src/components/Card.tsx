import React from "react";
import styled from "styled-components";
import { Dot } from "./Dots";

interface CardProps {
  heading: string;
  nextFunction?: string;
}

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 16px 0;
  flex-basis: 250px;
`;

const Heading = styled.h4`
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: #a5a5a5;
`;

const Label = styled.label`
  display: block;
  margin: 12px 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: #252525;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 12px;
  background-color: #fff;

  &:focus {
    border-color: #4da6ff;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #fff;
  cursor: not-allowed;

  &:disabled {
    background-color: #e9ecef;
  }
`;

const Container = styled.div`
  padding: 24px 0px;
  display: flex;
  flex-direction: row; /* Stack items vertically */
  gap: 10px;
  justify-content: space-between;
`;

// Styled component for the label row
const LabelRow = styled.div`
  display: flex;
  align-items: center; /* Center items vertically */
  color: black;
  gap: 8px;
`;

export const Card: React.FC<CardProps> = ({ heading, nextFunction }) => {
  return (
    <CardContainer>
      <Heading>{heading}</Heading>
      <Label>Equation</Label>
      <Input type="text" placeholder="Enter your equation" />

      <Label>Next function</Label>
      <Select name={nextFunction} id="functions" disabled>
        <option value="f1" selected={nextFunction === "f1"}>
          Function 1
        </option>
        <option value="f2" selected={nextFunction === "f2"}>
          Function 2
        </option>
        <option value="f3" selected={nextFunction === "f3"}>
          Function 3
        </option>
        <option value="f4" selected={nextFunction === "f4"}>
          Function 4
        </option>
        <option value="f5" selected={nextFunction === "f5"}>
          Function 5
        </option>
      </Select>
      <Container>
        <LabelRow>
          <Dot  /> <span>Input</span>
        </LabelRow>
        <LabelRow>
          <Dot  /> <span>Output</span>
        </LabelRow>
      </Container>
    </CardContainer>
  );
};
