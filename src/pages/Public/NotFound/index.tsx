import { FC } from 'react';

import Title from 'src/components/Title';

import { Container } from './styles';

const NotFound: FC = () => {
  return (
    <Container>
      <Title variant="header">NotFound</Title>
    </Container>
  );
};

export default NotFound;
