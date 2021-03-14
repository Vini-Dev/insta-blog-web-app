import styled from 'styled-components';

import { TOP_NAVIGATION_HEIGHT } from 'src/layouts/Private/TopNavigation/styles';
import devices from 'src/styles/devices';
import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div`
  position: sticky;
  top: ${TOP_NAVIGATION_HEIGHT}px;

  display: none;
  height: ${() => `calc(100vh - ${TOP_NAVIGATION_HEIGHT}px)`};
  width: 100%;
  padding: 32px 0;
  margin-right: 8px;

  @media ${devices.tablet} {
    display: block;
  }
`;

export const Content = styled.div`
  height: 100%;
  border-right: 1px solid ${({ theme }: ThemeType) => theme.border};
`;
