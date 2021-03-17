import styled, { css } from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div`
  width: 100%;

  .root-label {
    margin-bottom: 2px;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
`;

export const Field = styled.textarea`
  font-size: 14px;
  font-weight: 400;
  -webkit-appearance: none;

  resize: vertical;

  width: 100%;
  min-height: 96px;
  border-radius: 8px;
  padding: 12px;

  ${({ theme }: ThemeType) => css`
    color: ${theme.input.normal.foreground};
    background-color: ${theme.input.normal.background};
    border: 1px solid ${theme.input.normal.border};

    transition: 200ms linear border-color;

    &.error {
      border-color: ${theme.input.error.border};
    }

    :hover,
    :focus {
      border-color: ${theme.input.normal.focus.border};
    }
  `}
`;
