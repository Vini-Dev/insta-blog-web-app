import { FC } from 'react';

import { Container } from './styles';

const Toast: FC = () => {
  return (
    <Container
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default Toast;
