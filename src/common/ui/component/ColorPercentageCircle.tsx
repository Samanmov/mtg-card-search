import React, { FC } from "react";
import styled, { css } from "styled-components";
import { palette } from "../../../common/model/palette";
import { Colors } from "../../../features/cardSearch/model/Colors";

const colorStyles: Record<Colors, string> = {
  [Colors.White]: palette.white.light,
  [Colors.Blue]: palette.info.main,
  [Colors.Black]: palette.black.dark,
  [Colors.Red]: palette.error.main,
  [Colors.Green]: palette.success.main,
};

const ColorCircle = styled.div<{ $bgColor: string; $textColor: string }>`
  ${({ $bgColor, $textColor }) => css`
    background-color: ${$bgColor};
    color: ${$textColor};
  `}
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.85rem;
`;

interface ColorPercentageCircleProps {
  color: Colors;
  percentage: number;
}

export const ColorPercentageCircle: FC<ColorPercentageCircleProps> = ({
  color,
  percentage,
}) => {
  const bgColor = colorStyles[color];
  const textColor =
    color === Colors.Black ? palette.white.light : palette.black.dark;

  return (
    <ColorCircle $bgColor={bgColor} $textColor={textColor}>
      {percentage}%
    </ColorCircle>
  );
};
