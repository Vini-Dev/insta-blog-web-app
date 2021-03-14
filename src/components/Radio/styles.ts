import styled, { css } from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div`
  display: grid;
  grid-gap: 8px;
`;

export const FieldLabel = styled.label`
  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;

  color: ${({ theme }: ThemeType) => theme.checkbox.normal.foreground};
  font-size: 16px;
  font-weight: 400;
`;

export const Field = styled.input`
  display: none;

  &:checked + span {
    border-color: ${({ theme }: ThemeType) => theme.checkbox.checked.border};
    background-color: ${({ theme }: ThemeType) =>
      theme.checkbox.checked.background};

    svg {
      color: ${({ theme }: ThemeType) => theme.checkbox.checked.icon};
    }

    &:hover,
    &:focus {
      border-color: ${({ theme }: ThemeType) =>
        theme.checkbox.checked.focus.border};
      background-color: ${({ theme }: ThemeType) =>
        theme.checkbox.checked.focus.background};
    }
  }
`;

export const CheckMark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 20px;
  width: 20px;

  margin-right: 4px;

  border-radius: 50%;

  transition: background-color 200ms linear, border-color 200ms linear;

  border: 1px solid ${({ theme }: ThemeType) => theme.checkbox.normal.border};
  background-color: ${({ theme }: ThemeType) =>
    theme.checkbox.normal.background};

  &:hover,
  &:focus {
    border-color: ${({ theme }: ThemeType) =>
      theme.checkbox.normal.focus.border};
  }

  svg {
    pointer-events: none;
    transition: color 200ms linear;

    color: ${({ theme }: ThemeType) => theme.checkbox.normal.icon};
  }
`;
