import styled, { css, keyframes } from 'styled-components';

import { Link } from 'react-router-dom';
import { sizes } from 'src/styles/devices';
import { ThemeType } from 'src/styles/themes/light';

export const TOP_NAVIGATION_HEIGHT = 64;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: ${TOP_NAVIGATION_HEIGHT}px;

  z-index: 1;
  background-color: ${({ theme }: ThemeType) => theme.topNavigation.background};
  box-shadow: ${({ theme }: ThemeType) => theme.topNavigation.shadow};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: ${sizes.tablet};
  margin: 0 auto;
  padding: 16px 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  /* grid-gap: 16px; */

  align-items: center;
`;

export const Links = styled.div`
  display: flex;
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 8px;
  text-decoration: none;
  border-radius: 4px;

  &:not(:last-of-type) {
    margin-right: 16px;
  }

  ${({ theme }: ThemeType) => css`
    color: ${theme.topNavigation.link.normal.foreground};
    background-color: ${theme.topNavigation.link.normal.background};

    transition: background-color 200ms linear, background-color 200ms linear,
      color 200ms linear;

    &:hover {
      color: ${theme.topNavigation.link.hover.foreground};
      background-color: ${theme.topNavigation.link.hover.background};
    }

    &.active {
      color: ${theme.topNavigation.link.active.foreground};
      background-color: ${theme.topNavigation.link.active.background};
    }
  `}
`;
