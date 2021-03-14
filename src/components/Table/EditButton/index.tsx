import { FC } from 'react';

import { RiEditFill } from 'react-icons/ri';

import { Container } from './styles';

const EditButton: FC = () => {
  return (
    <Container>
      <RiEditFill />
    </Container>
  );
};

export default EditButton;
