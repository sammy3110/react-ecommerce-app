import styled from "styled-components";
import styleVariables from "../../variables";

export const PrimaryButton = styled.button`
  padding: 1em 1.5em;
  border-radius: 5px;
  font-family: ${styleVariables.font_2};

  background: linear-gradient(
    to right,
    ${styleVariables.primary_color},
    ${styleVariables.secondary_color}
  );
  border: none;
  color: #fff;
  font-size: 1rem;
  // font-weight: bold;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  :hover {
    cursor: pointer;
  }

  p:nth-child(2) {
    transition-duration: 200ms;
    margin-left: 10px;
    display: flex;
  }

  :hover p:nth-child(2) {
    transform: translateX(10px);
  }
`;
