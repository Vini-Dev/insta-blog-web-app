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

export const Field = styled.input`
  width: 100%;
  -webkit-appearance: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  height: 48px;
  padding: 0 12px;

  ${({ theme }: ThemeType) => css`
    color: ${theme.input.normal.foreground};
    background-color: ${theme.input.normal.background};
    border: 1px solid ${theme.input.normal.border};

    transition: 200ms linear border-color;

    &.error {
      border-color: ${theme.input.error.border};
    }

    :read-only {
      border-color: ${theme.input.normal.border};
    }

    :not(:read-only):hover,
    :not(:read-only):focus {
      border-color: ${theme.input.normal.focus.border};
    }
  `}

  &:read-only {
    cursor: not-allowed;
  }
`;
