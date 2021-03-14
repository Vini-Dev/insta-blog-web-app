import styled from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 84px);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;

  .root-title {
    margin-bottom: 32px;
  }

  .root-button {
    margin-top: 8px;
  }

  .root-input-container {
    margin-bottom: 16px;
  }

  .root-button,
  .root-input-field {
    width: 100%;
  }
`;

export const ForgotMyPasswordContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 24px;
`;

export const ForgotMyPasswordButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }: ThemeType) => theme.gray3};

  background: none;
  border: none;

  transition: color 200ms linear;

  &:hover {
    color: ${({ theme }: ThemeType) => theme.gray6};
    text-decoration: underline;
  }
`;
