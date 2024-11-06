import styled, { css } from "styled-components";
import { InputHTMLAttributes } from "react";
import { palette } from "../../model/palette";

interface InputProps {
  label?: string;
  error?: string;
  id: string;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: ${palette.black.dark};
`;

export const StyledInput = styled.input<InputProps>`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${palette.border};
  transition: border-color 0.3s;

  &:focus {
    border-color: ${palette.primary.main}; // Focus state border color
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${palette.error.main};
    `}
`;

export const ErrorText = styled.div`
  color: ${palette.error.main};
  margin-top: 8px;
  font-size: 12px;
`;

export const Input = ({
  label,
  error,
  id,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => (
  <InputContainer>
    {label && <Label htmlFor={id}>{label}</Label>}
    <StyledInput id={id} error={error} {...props} />
    {error && <ErrorText>{error}</ErrorText>}
  </InputContainer>
);