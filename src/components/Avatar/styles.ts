import styled, { css } from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

interface ContainerProps extends ThemeType {
  iconSize: number;
  size: number;
  src?: string;
}

export const Container = styled.div`
  ${({ iconSize, size, src, theme }: ContainerProps) => css`
    height: ${size}px;
    width: ${size}px;
    border: 1px solid ${theme.avatar.border};
    background-color: ${theme.avatar.background};
    background-image: url('${src}');

    transition: background-image 200ms linear;

    svg {
      display: ${src ? 'none' : 'inline'};
      font-size: ${iconSize}px;
      color: ${theme.gray1};
    }
  `}

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
