import styled from "styled-components";
import styleVariables from "../../variables";

export const Description = styled.p`
  // border: solid red 2px;
  margin-bottom: 2em;
  max-width: ${({maxWidth}) => maxWidth};

  color: #fff;
  font-family: ${styleVariables.font_2};
`;
