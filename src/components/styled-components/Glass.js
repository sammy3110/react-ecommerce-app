import styled from "styled-components";
import styleVariables from "../../variables";

export const Glass = styled.div`
  font-family: ${styleVariables.font_2};
  position: relative;

  max-width: 15em;
  padding: 1em;

  border-radius: 10px;
  border-left: 1px solid #fff7;
  border-top: 1px solid #fff7;
  background-color: #fff2;
  
  backdrop-filter: blur(10px);
  color: #fff;
  text-align: center;
  transition-duration: 300ms;
  
  p {
    font-weight: 300;
  }
  
  &:hover {
    background-color: #ffffff17;
    cursor: default;
  }



  // &::before,
  // &::after {
  //   content: "";
  //   position: absolute;
  //   height: 2em;
  //   width: 2em;
  //   background: linear-gradient(
  //     to left,
  //     ${styleVariables.primary_color},
  //     ${styleVariables.secondary_color}
  //   );
  //   border-radius: 6px;
  //   transform: rotateZ(45deg);
  //   z-index: -1;
  // }
`;
