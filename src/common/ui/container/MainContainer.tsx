import styled, { css } from "styled-components";
import { palette } from "../../model/palette";
import { FC, PropsWithChildren } from "react";
import { ImageWithLoading } from "./ImageWithPlaceholder";

type MainContainerProps = PropsWithChildren & {
  flexCenter?: boolean;
};

const MainContainerStyle = styled.div.withConfig({
  shouldForwardProp: (prop) => !["flexCenter"].includes(prop),
})<MainContainerProps>`
  ${({ flexCenter }) =>
    flexCenter &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      flex-direction: column;
    `}
  min-height: 100vh;
  background-color: ${palette.gray.light};
`;

export const MainContainer: FC<MainContainerProps> = ({
  flexCenter = true,
  children,
}) => {
  return (
    <MainContainerStyle flexCenter={flexCenter}>
      <ImageWithLoading
        margin="0 auto"
        src="/MTG-logo.png"
        height="auto"
        width="170px"
        isLoading={false}
        enabledBgColor={false}
      />
      {children}
    </MainContainerStyle>
  );
};
