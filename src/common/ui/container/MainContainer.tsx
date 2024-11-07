import styled from "styled-components";
import { palette } from "../../model/palette";
import { FC, PropsWithChildren } from "react";

type MainContainerProps = PropsWithChildren & {
  flexCenter?: boolean;
};

const MainContainerStyle = styled.div<MainContainerProps>`
  ${({ flexCenter }) =>
    flexCenter &&
    `
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 20px;
  `}
  min-height: 100vh;

  background-color: ${palette.gray.light};
`;

export const MainContainer: FC<MainContainerProps> = ({
  flexCenter = true,
  children,
}) => {
  return (
    <MainContainerStyle flexCenter={flexCenter}>{children}</MainContainerStyle>
  );
};
