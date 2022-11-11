import styled from "styled-components";

export const Shine = styled.div`

  background-color: ${props => props.color};
  border-radius: 50%;
  font-size: 15.6rem;
  height: 1.2em;
  width: 1.2em;
  filter: blur(160px);

  position: absolute;
  z-index: -1;
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
`;
