import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { ImageWithLoading } from "../container/ImageWithPlaceholder";
import { palette } from "../../model/palette";

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
      <h2>{title}</h2>
      <h3>{name}</h3>
      <p>{type}</p>
      <ImageWithLoading
        src={src}
        alt={`Image of ${name}`}
        height="481px"
        width="347px"
        isLoading={isLoading}
      />
      {action && <div style={{ marginTop: "20px" }}>{action}</div>}
    </CardStyle>
  );
};
