import styled, { css } from 'styled-components';

import { ToastContainer } from 'react-toastify';
import { ThemeType } from 'src/styles/themes/light';

import 'react-toastify/dist/ReactToastify.css';

export const Container = styled(ToastContainer)`
  ${({ theme }: ThemeType) => css`
    .Toastify__toast--info {
      background-color: ${theme.info};
    }
    .Toastify__toast--success {
      background-color: ${theme.success};
    }
    .Toastify__toast--warning {
      background-color: ${theme.warning};
    }
    .Toastify__toast--error {
      background-color: ${theme.error};
    }
  `}
`;
