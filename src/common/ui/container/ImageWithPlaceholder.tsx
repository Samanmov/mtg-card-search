import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import { palette } from "../../model/palette";
import { Body1, Body2 } from "../component/Typography";

interface ImageWithLoadingProps {
  src: string | null;
  alt?: string;
  width?: string;
  height?: string;
  isLoading: boolean;
  error?: string | null;
}

const ImageContainer = styled.div<{
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "300px"};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${palette.disabled.light};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Placeholder = styled.div<{
  width?: string;
  height?: string;
}>`
  background-image: ${({ width, height }) =>
    `url("https://via.placeholder.com/${width}x${height}")`};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({
  src,
  alt,
  width,
  height,
  isLoading,
  error,
}) => {
  return (
    <ImageContainer width={width} height={height}>
      {isLoading ? (
        <Skeleton width="100%" height="100%" />
      ) : error || !src ? (
        <Placeholder aria-label={alt || "Placeholder image"}>
          <Body1>No image found</Body1>
        </Placeholder>
      ) : (
        <StyledImage src={src} alt={alt || "Loaded image"} />
      )}
    </ImageContainer>
  );
};
