import styled from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div`
  color: ${({ theme }: ThemeType) => theme.text.title};

  &.display {
    font-size: 42px;
    font-weight: 800;
  }

  &.header {
    font-size: 34px;
    font-weight: 800;
  }

  &.title {
    font-size: 28px;
    font-weight: 800;
  }

  &.subtitle {
    font-size: 22px;
    font-weight: 600;
  }

  &.headline {
    font-size: 20px;
    font-weight: 600;
  }
`;
