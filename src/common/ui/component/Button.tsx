import styled, { css } from "styled-components";
import { palette } from "../../model/palette";

type Variant = "primary" | "secondary";

type ButtonProps = {
  variant?: Variant;
  disabled?: boolean;
};

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !["variant"].includes(prop),
})<ButtonProps>`
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  transition:
    background-color 0.3s,
    color 0.3s;
  color: ${palette.white.light};
  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: ${palette.primary.main};
      &:hover {
        background-color: ${palette.primary.dark};
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: transparent;
      color: ${palette.primary.main};
      outline: 2px solid ${palette.primary.main};
      &:hover {
        background-color: ${palette.primary.light};
        border-color: ${palette.primary.dark};
      }
    `}
  
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${palette.disabled.light};
      color: ${palette.disabled.main};
      cursor: not-allowed;
      &:hover {
        background-color: ${palette.disabled.light};
      }
    `}
`;
