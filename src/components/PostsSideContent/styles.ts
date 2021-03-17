import styled from 'styled-components';

import { TOP_NAVIGATION_HEIGHT } from 'src/layouts/Private/TopNavigation/styles';
import devices from 'src/styles/devices';
import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div`
  position: sticky;
  top: ${TOP_NAVIGATION_HEIGHT}px;
  width: 100%;
  padding: 24px;

  @media ${devices.tablet} {
    height: ${() => `calc(100vh - ${TOP_NAVIGATION_HEIGHT}px)`};
    padding: 32px 0;
    margin-right: 8px;
  }
`;

export const Content = styled.div`
  height: 100%;

  @media ${devices.tablet} {
    border-right: 1px solid ${({ theme }: ThemeType) => theme.border};
  }
`;
