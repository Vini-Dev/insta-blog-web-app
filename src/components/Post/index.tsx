import { FC, useState } from 'react';

import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import Avatar from 'src/components/Avatar';
import api from 'src/services/api';

import {
  Container,
  Controls,
  Description,
  Image,
  ImageContainer,
  LikeButton,
  User,
  UserName,
} from './styles';

interface PostsProps {
  createdBy: {
    name: string;
  };
  description: string;
  id: string;
  image: string;
  liked: boolean;
}

const Post: FC<PostsProps> = ({ createdBy, description, id, image, liked }) => {
  const [localLiked, setLocalLiked] = useState(liked);

  const handleOnClickLike = async () => {
    try {
      if (localLiked) {
        await api.delete(`/posts/like/${id}`);
      } else {
        await api.put(`/posts/like/${id}`);
      }
      console.log('like');
      setLocalLiked(!localLiked);
    } catch (error) {
      setLocalLiked(localLiked);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
        <User>
          <Avatar size={40} />
          <UserName>{createdBy.name}</UserName>
        </User>
      </ImageContainer>
      <Controls>
        <LikeButton
          type="button"
          liked={localLiked}
          onClick={handleOnClickLike}
        >
          {localLiked ? <IoIosHeart /> : <IoIosHeartEmpty />}
        </LikeButton>
      </Controls>
      <Description>{description}</Description>
    </Container>
  );
};

export default Post;
