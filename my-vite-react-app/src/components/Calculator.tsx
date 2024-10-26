// import React from "react";
import { Arrow } from "./Arrow";
import { Card } from "./Card";
import { functionArray } from "./constants";

import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: "row";
  justify-content: "flex-start";
  gap: 24px;
  padding: 20px;
  margin-inline: 250px;
`;

export const Calculator = () => {
  const findEndPoint = (i: any) => {
    if (i === -1) {
      return functionArray[i+1]?.inputStartPoint;
    }
    const nextId = findNextFunction(functionArray[i].nextFunctionValue);
    console.log(nextId, "index", i ,functionArray[i].nextFunctionValue);
    if (nextId !== -1) {
      return functionArray[nextId].inputStartPoint;
    } else {
      return { x: 1266, y: 283 };
    }
  };
  const findStartingPoint = (i: any) => {
    if (i === 0) {
      return { x: 163, y: 281 };
    }
    return functionArray[i-1]?.outputStartPoint;
  };

  const findNextFunction = (index: String) => {
    const id = functionArray.findIndex((a) => a.id === index);
    // console.log(id, "index", index);
    return id;
  };
  return (
    <FlexContainer>
      {functionArray.map((item, i) => {
        return (
          <>
            <Card
              nextFunction={item?.nextFunctionValue}
              heading={item?.heading}
            />
            <Arrow
              startPoint={findStartingPoint(i)}
              endPoint={findEndPoint(i-1)}
              config={{
                arrowColor: "green",
                strokeWidth: 4,
                controlPointsColor: "#aaa",
              }}
            />
          </>
        );
      })}
    </FlexContainer>
  );
};
