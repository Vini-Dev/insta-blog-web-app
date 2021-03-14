import { FC } from 'react';

import Profile from './Profile';
import { Container, Content } from './styles';

const PostsSideContent: FC = () => {
  return (
    <Container>
      <Content>
        <Profile />
      </Content>
    </Container>
  );
};

export default PostsSideContent;
