import { FC } from 'react';

import { Container, Content } from './styles';

const Auth: FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Auth;
