import { FC } from 'react';

import { Container, Content } from './styles';
import TopNavigation from './TopNavigation';

const Private: FC = ({ children }) => {
  return (
    <Container>
      <TopNavigation />
      <Content>{children}</Content>
    </Container>
  );
};

export default Private;
