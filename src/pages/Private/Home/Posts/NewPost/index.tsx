import { FC, HTMLAttributes, useRef } from 'react';

import Button from 'src/components/Button';
import Title from 'src/components/Title';

import Modal, { ModalHandlers } from './Modal';
import { Container } from './styles';

interface NewPostProps extends HTMLAttributes<HTMLDivElement> {
  onPost: () => void;
}

const NewPost: FC<NewPostProps> = ({ onPost }) => {
  const modalRef = useRef<ModalHandlers>(null);

  const handleOnClick = () => {
    modalRef.current?.show();
  };

  return (
    <>
      <Modal ref={modalRef} onPost={onPost} />
      <Container>
        <Title variant="headline">Posts</Title>
        <Button label="New post" variant="line" onClick={handleOnClick} />
      </Container>
    </>
  );
};

export default NewPost;
