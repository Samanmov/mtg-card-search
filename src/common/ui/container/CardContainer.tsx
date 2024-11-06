import styled from "styled-components";
import { palette } from "../../model/palette";

interface FormContainerProps {
  centerAlign?: boolean;
}

export const CardContainer = styled.div<FormContainerProps>`
  width: 100%;
  max-width: 500px;
  background-color: ${palette.white.light};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${({ centerAlign }) =>
    centerAlign &&
    `
    text-align: center;
  `}
`;
