import { FC } from 'react';

import { IoHeart } from 'react-icons/io5';

import { Container } from './styles';

const Heartbeat: FC = () => {
  return (
    <Container>
      <IoHeart />
    </Container>
  );
};

export default Heartbeat;
