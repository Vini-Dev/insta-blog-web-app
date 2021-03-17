import { FC, useState } from 'react';

import { IoIosHeart, IoIosHeartEmpty, IoIosTrash } from 'react-icons/io';
import { toast } from 'react-toastify';
import Avatar from 'src/components/Avatar';
import api from 'src/services/api';

import Heart from './Heart';
import {
  Container,
  Controls,
  Description,
  DeleteButton,
  Image,
  ImageContainer,
  LikeButton,
  User,
  UserName,
} from './styles';

interface PostsProps {
  createdBy: {
    name: string;
    avatar_url?: string;
  };
  description: string;
  id: string;
  image: string;
  liked: boolean;
  allowDelete?: boolean;
  onChange?: () => void;
}

const Post: FC<PostsProps> = ({
  createdBy,
  description,
  id,
  image,
  liked,
  allowDelete = false,
  onChange,
}) => {
  const [localLiked, setLocalLiked] = useState(liked);
  const [showHeart, setShowHeart] = useState(false);

  const like = async () => {
    try {
      setShowHeart(true);
      setLocalLiked(true);

      await api.put(`/posts/like/${id}`);

      if (onChange) onChange();

      setTimeout(() => {
        setShowHeart(false);
      }, 1000);
    } catch (error) {
      setLocalLiked(false);
    }
  };

  const dislike = async () => {
    try {
      setLocalLiked(false);

      await api.delete(`/posts/like/${id}`);

      if (onChange) onChange();
    } catch (error) {
      setLocalLiked(true);
    }
  };

  const handleOnDelete = async () => {
    try {
      await api.delete(`/posts/${id}`);
      toast.success('Success when delete post');

      if (onChange) onChange();
    } catch (error) {
      toast.error('Error when delete post');
    }
  };

  const handleOnChange = async () => {
    if (localLiked) {
      dislike();
    } else {
      like();
    }
  };

  return (
    <Container>
      <ImageContainer>
        {showHeart && <Heart />}
        <Image src={image} onDoubleClick={handleOnChange} />
        <User>
          <Avatar size={40} src={createdBy.avatar_url} />
          <UserName>{createdBy.name}</UserName>
        </User>
        {allowDelete && (
          <DeleteButton type="button" onClick={handleOnDelete}>
            <IoIosTrash />
          </DeleteButton>
        )}
      </ImageContainer>
      <Controls>
        <LikeButton type="button" liked={localLiked} onClick={handleOnChange}>
          {localLiked ? <IoIosHeart /> : <IoIosHeartEmpty />}
        </LikeButton>
      </Controls>
      <Description>{description}</Description>
    </Container>
  );
};

export default Post;
