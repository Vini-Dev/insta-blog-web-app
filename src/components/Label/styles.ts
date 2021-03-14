import styled from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.label`
  display: inline-block;
  width: 100%;

  color: ${({ theme }: ThemeType) => theme.text.label};
  font-size: 16px;
  font-weight: 400;
`;
