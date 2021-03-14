import { FC } from 'react';

import Avatar from 'src/components/Avatar';

import {
  Container,
  Description,
  Image,
  ImageContainer,
  User,
  UserName,
} from './styles';

interface PostsProps {
  description: string;
  image: string;
  createdBy: {
    name: string;
  };
}

const Post: FC<PostsProps> = ({ description, image, createdBy }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
        <User>
          <Avatar size={40} />
          <UserName>{createdBy.name}</UserName>
        </User>
      </ImageContainer>
      <Description>{description}</Description>
    </Container>
  );
};

export default Post;
