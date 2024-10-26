import styled from "styled-components";

const DotContainer = styled.div`
  width: 10px; /* Diameter of the dot */
  height: 10px; /* Diameter of the dot */
  background-color: #0066ff4d;
  border: 4px solid white; /* Optional: Border color */
  border-radius: 50%; /* Makes the shape circular */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const Dot = () => {
  const handleClick = (event: any) => {
    const x = event.clientX; // X coordinate of the click
    const y = event.clientY; // Y coordinate of the click
    console.log(`Mouse clicked at: X=${x}, Y=${y}`);
  };
  return <DotContainer onClick={handleClick}></DotContainer>;
};
