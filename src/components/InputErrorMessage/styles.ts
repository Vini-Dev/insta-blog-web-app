import styled from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div`
  margin-top: 4px;

  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }: ThemeType) => theme.error};
`;
