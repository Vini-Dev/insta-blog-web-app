import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import devices, { sizes } from 'src/styles/devices';
import { ThemeType } from 'src/styles/themes/light';

export const TOP_NAVIGATION_HEIGHT = 64;

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

  padding: 16px;

  @media ${devices.tablet} {
    padding: 16px 0;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 28px;
  width: 28px;

  &:not(:last-of-type) {
    margin-right: 16px;
  }

  &:last-of-type {
    margin-right: 16px;
  }

  ${({ theme }: ThemeType) => css`
    svg {
      font-size: 24px;
      color: ${theme.topNavigation.link.normal.foreground};
      transition: color 200ms linear;
    }

    &:hover {
      svg {
        color: ${theme.topNavigation.link.hover.foreground};
      }
    }

    &.active {
      svg {
        color: ${theme.topNavigation.link.active.foreground};
      }
    }
  `}
`;
