import { FC } from 'react';

import PostsSideContent from 'src/components/PostsSideContent';

import Posts from './Posts';
import { Container } from './styles';

const Likes: FC = () => {
  return (
    <Container>
      <PostsSideContent />
      <Posts />
    </Container>
  );
};

export default Likes;
