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
      color: ${palette.primary.main};
      outline: 2px solid ${palette.primary.main};
      &:hover {
        background-color: ${palette.primary.light};
      }
    `}
  
  ${({ disabled, variant }) =>
    disabled &&
    css`
      background-color: ${palette.disabled.light};
      color: ${palette.disabled.main};
      cursor: unset;
      ${variant === "secondary" &&
      css`
        outline-color: ${palette.disabled.main};
        background-color: ${palette.gray.light};
        &:hover {
          background-color: ${palette.gray.light};
        }
      `}
      ${variant === "primary" &&
      css`
        &:hover {
          background-color: ${palette.disabled.light};
        }
      `}
    `}
`;
