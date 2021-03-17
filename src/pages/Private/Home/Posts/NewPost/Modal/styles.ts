import styled, { css } from 'styled-components';

import { sizes } from 'src/styles/devices';
import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;

  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;
  background-color: ${({ theme }: ThemeType) => theme.modal.backdrop};
`;

export const Content = styled.div`
  position: relative;

  padding: 32px;
  border-radius: 16px;
  width: 100%;
  max-width: ${sizes.mobileL};

  ${({ theme }: ThemeType) => css`
    background-color: ${theme.modal.background};
  `}

  .root-textarea-container,.root-image-input {
    margin-bottom: 16px;
  }

  .root-button {
    width: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  border: none;
  background: none;
  height: 28px;
  width: 28px;

  ${({ theme }: ThemeType) => css`
    svg {
      font-size: 28px;
      color: ${theme.modal.closeButton.normal.foreground};
    }

    &:hover {
      svg {
        color: ${theme.modal.closeButton.hover.foreground};
      }
    }
  `}
`;
