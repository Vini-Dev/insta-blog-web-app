import { FC } from 'react';

import { Container, Content } from './styles';

const Public: FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Public;
