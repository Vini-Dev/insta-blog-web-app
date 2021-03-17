import styled from 'styled-components';

import { Link } from 'react-router-dom';
import devices from 'src/styles/devices';
import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div`
  padding: 24px;

  @media ${devices.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 84px);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;

  .root-title {
    margin-bottom: 32px;
  }

  .root-avatar {
    margin: 0 auto 32px auto;
  }

  .root-button {
    margin-top: 16px;
  }

  .root-input-container {
    margin-bottom: 16px;
  }

  .root-button,
  .root-input-field {
    width: 100%;
  }
`;

export const LogIn = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 24px;
`;

export const LogInLink = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }: ThemeType) => theme.gray3};

  text-decoration: none;
  transition: color 200ms linear;

  &:hover {
    color: ${({ theme }: ThemeType) => theme.gray6};
    text-decoration: underline;
  }
`;

export const LogInLinkHighlight = styled.span`
  color: ${({ theme }: ThemeType) => theme.primary};
  font-weight: 600;
`;
