import styled from "styled-components";

interface GridContainerProps {
  cols: number;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
  gap: 20px;
`;

interface GridItemProps {
  span: number;
}

export const GridItem = styled.div<GridItemProps>`
  grid-column: span ${({ span }) => span};
`;
