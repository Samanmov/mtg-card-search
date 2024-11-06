import styled from "styled-components";
import { palette } from "../../model/palette";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: ${palette.gray.light};
`;
