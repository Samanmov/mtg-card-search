import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { ImageWithLoading } from "../container/ImageWithPlaceholder";
import { palette } from "../../model/palette";
import { Body2, H3, H4 } from "./Typography";

type CardContentProps = {
  title: string;
  action?: ReactNode;
  isLoading: boolean;
  name?: string;
  src: string | null;
  type?: string;
};

export const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin-top: 20px;
  background-color: ${palette.white.light};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardContent: FC<CardContentProps> = ({
  title,
  type,
  src,
  name,
  isLoading,
  action,
}) => {
  return (
    <CardStyle>
      <H3>{title}</H3>
      <H4>{name}</H4>
      <Body2>{type}</Body2>
      <ImageWithLoading
        src={src}
        alt={`Image of ${name}`}
        height="481px"
        width="347px"
        isLoading={isLoading}
      />
      {action && <div style={{ margin: "20px 0" }}>{action}</div>}
    </CardStyle>
  );
};
