import { FC, useEffect, useState } from 'react';

import api from 'src/services/api';

import Post from './Post';
import { Container } from './styles';

const Posts: FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await api.get('/posts');
        console.log({ response });
        setPosts(response.data);
      } catch (error) {
        setPosts([]);
      }
    };

    getPosts();
  }, []);

  return (
    <Container>
      {posts.map(({ _id, description, image, created_by }) => (
        <Post
          key={_id}
          description={description}
          image={image}
          createdBy={created_by}
        />
      ))}
    </Container>
  );
};

export default Posts;
