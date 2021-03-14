import { FC, useState } from 'react';

// import Title from 'src/components/Title';

import Posts from './Posts';
import SideContent from './SideContent';
import { Container } from './styles';

const Home: FC = () => {
  return (
    <Container>
      <SideContent />
      <Posts />
    </Container>
  );
};

export default Home;
