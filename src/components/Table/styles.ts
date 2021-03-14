import styled, { css } from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div`
  pre {
    margin: 24px 0;
  }
`;

export const TableHtml = styled.table`
  width: 100%;
  border-spacing: 0;
  border: 1px solid ${({ theme }: ThemeType) => theme.border};
  border-radius: 8px;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody`
  tr:last-child {
    td {
      border-bottom: 0;
    }
  }
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }: ThemeType) => theme.gray4};

  margin: 0;
  padding: 8px;
  border-bottom: 1px solid ${({ theme }: ThemeType) => theme.border};
  border-right: 1px solid ${({ theme }: ThemeType) => theme.border};
  :last-child {
    border-right: 0;
  }
`;

export const Th = styled.td`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }: ThemeType) => theme.gray6};

  margin: 0;
  padding: 8px;
  border-bottom: 1px solid ${({ theme }: ThemeType) => theme.border};
  border-right: 1px solid ${({ theme }: ThemeType) => theme.border};
  :last-child {
    border-right: 0;
  }
`;

export const Pagination = styled.div`
  padding: 16px 0;
`;

export const Select = styled.select`
  border: none;
  background: none;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  margin-right: 8px;

  &:last-of-type {
    margin-right: 24px;
  }

  svg {
    color: ${({ theme }: ThemeType) => theme.gray5};

    font-size: 20px;
    pointer-events: none;

    transition: color 200ms linear;
  }

  &:not(:disabled):hover {
    svg {
      color: ${({ theme }: ThemeType) => theme.primary};
    }
  }

  &:disabled {
    svg {
      color: ${({ theme }: ThemeType) => theme.gray1};
    }
  }
`;

export const Span = styled.span``;

export const Option = styled.option``;
