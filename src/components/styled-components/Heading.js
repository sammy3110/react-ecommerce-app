import styled from "styled-components";
import styleVariables from "../../variables";

export const Heading = styled.h1`
  margin-bottom: .1em;
  max-width: ${({maxWidth}) => maxWidth};
  font-weight: bold;

  color: #fff;
  font-size: ${({fontSize}) => fontSize};
  font-family: ${styleVariables.font_1};
  line-height: 0.9em;
  letter-spacing: 0.06em;
  
  span {
    font-family: ${styleVariables.font_1};
    color: ${styleVariables.primary_color};
  }
`;
