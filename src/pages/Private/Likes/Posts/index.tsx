import { FC, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import Post from 'src/components/Post';
import api from 'src/services/api';
import { RootState } from 'src/store/ducks/index';

import { Container } from './styles';

interface PostsDataInterface {
  created_by: {
    name: string;
  };
  description: string;
  _id: string;
  image: string;
  likes: string[];
}

const Posts: FC = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await api.get('/posts?myLikes=true');

        setPosts(response.data);
      } catch (error) {
        setPosts([]);
      }
    };

    getPosts();
  }, []);

  return (
    <Container>
      {posts.map(
        ({
          _id,
          created_by,
          description,
          image,
          likes,
        }: PostsDataInterface) => {
          const liked = likes.includes(user._id);

          return (
            <Post
              key={_id}
              id={_id}
              createdBy={created_by}
              description={description}
              image={image}
              liked={liked}
            />
          );
        }
      )}
    </Container>
  );
};

export default Posts;
