import styled, { css } from "styled-components";
import { ErrorText, InputContainer, Label } from "./Input";
import { FC, ReactNode, SelectHTMLAttributes } from "react";
import { palette } from "../../model/palette";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  id: string;
  children: ReactNode;
}

const StyledSelect = styled.select<SelectProps>`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${palette.border};
  transition: border-color 0.3s;
  width: 100%;
  background-color: ${palette.white.light};
  &:focus {
    border-color: ${palette.primary.main};
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${palette.error.main};
      &:focus {
        border-color: ${palette.error.main};
        outline: none;
      }
    `}
`;

export const Select: FC<SelectProps> = ({
  label,
  error,
  id,
  children,
  ...props
}) => (
  <InputContainer>
    {label && <Label htmlFor={id}>{label}</Label>}
    <StyledSelect id={id} error={error} {...props}>
      {children}
    </StyledSelect>
    {error && <ErrorText>{error}</ErrorText>}
  </InputContainer>
);
