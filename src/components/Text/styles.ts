import styled from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.span`
  &.body {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }: ThemeType) => theme.text.body};
  }

  &.caption {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }: ThemeType) => theme.text.caption};
  }
`;
