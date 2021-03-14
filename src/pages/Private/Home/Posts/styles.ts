import styled from 'styled-components';

import devices from 'src/styles/devices';

export const Container = styled.div`
  display: grid;
  grid-gap: 24px;

  width: 100%;

  @media ${devices.tablet} {
    padding: 24px 0 24px 16px;
  }
`;
