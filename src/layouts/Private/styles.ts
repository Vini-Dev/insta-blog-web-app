import styled from 'styled-components';

import devices, { sizes } from 'src/styles/devices';

export const Container = styled.div``;

export const Content = styled.div`
  position: relative;

  @media ${devices.mobileL} {
    padding: 16px;
  }

  @media ${devices.tablet} {
    max-width: ${sizes.tablet};
    margin: 0 auto;
    padding: 0;
  }
`;
