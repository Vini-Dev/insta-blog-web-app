import styled, { css } from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

interface ContainerProps extends ThemeType {
  src: string;
}

export const Container = styled.div`
  padding: 32px;
  border-radius: 16px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  min-height: 200px;

  ${({ src, theme }: ContainerProps) => css`
    background-color: ${theme.avatar.background};
    border: 1px solid ${theme.avatar.border};
    background-image: url('${src}');
  `}
`;
