import { FC } from 'react';

import Profile from './Profile';
import { Container, Content } from './styles';

const SideContent: FC = () => {
  return (
    <Container>
      <Content>
        <Profile />
      </Content>
    </Container>
  );
};

export default SideContent;
