import styled from "styled-components";
import { palette } from "../../model/palette";

export const H2 = styled.h2`
  font-size: 1.5rem;
  margin: 5px 0;
  font-optical-sizing: auto;
  font-style: normal;
`;

export const H3 = styled.h3`
  font-size: 1.25rem;
  margin: 5px 0;
  font-optical-sizing: auto;
  font-style: normal;
`;

export const H4 = styled.h4`
  font-size: 1rem;
  margin: 5px 0;
  font-optical-sizing: auto;
  font-style: normal;
  color: ${palette.gray.dark};
`;

export const Body1 = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  font-optical-sizing: auto;
  font-style: normal;
  color: ${palette.gray.dark};
`;

export const Body2 = styled.p`
  font-size: 0.75rem;
  margin: 10px 0;
  font-optical-sizing: auto;
  font-style: normal;
  color: ${palette.gray.dark};
`;
