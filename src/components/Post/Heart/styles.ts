import styled, { keyframes } from 'styled-components';

import devices from 'src/styles/devices';

const heartbeat = keyframes`
{
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
}`;

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  svg {
    font-size: 128px;
    color: #ffffff;
    animation: ${heartbeat} 1s infinite;
  }

  @media ${devices.tablet} {
    font-size: 64px;
  }
`;
