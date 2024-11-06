import styled, { keyframes } from "styled-components";
import { palette } from "../../model/palette";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SimpleSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${palette.gray.extraLight};
  border-top: 4px solid ${palette.primary.main};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
