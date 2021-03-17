import styled from 'styled-components';

import devices from 'src/styles/devices';

export const Container = styled.div`
  width: 100%;
  padding: 0px 24px 24px 24px;

  @media ${devices.tablet} {
    padding: 24px 0 24px 16px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 24px;
`;
