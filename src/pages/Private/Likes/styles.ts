import styled from 'styled-components';

import devices from 'src/styles/devices';

export const Container = styled.div`
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
  }
`;
