import { FC, useCallback, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import Post from 'src/components/Post';
import api from 'src/services/api';
import { RootState } from 'src/store/ducks/index';

import NewPost from './NewPost';
import { Container, Content } from './styles';

interface PostsDataInterface {
  created_by: {
    _id: string;
    name: string;
  };
  description: string;
  _id: string;
  image_url: string;
  likes: string[];
}

const Posts: FC = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((state: RootState) => state.auth);

  const getPosts = useCallback(async () => {
    try {
      const response = await api.get('/posts');

      setPosts(response.data);
    } catch (error) {
      setPosts([]);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <NewPost onPost={getPosts} />
      <Content>
        {posts.map(
          ({
            _id,
            created_by,
            description,
            image_url,
            likes,
          }: PostsDataInterface) => {
            const liked = likes.includes(user._id);

            return (
              <Post
                key={_id}
                id={_id}
                createdBy={created_by}
                description={description}
                image={image_url}
                liked={liked}
                onChange={getPosts}
                allowDelete={user._id === created_by._id}
              />
            );
          }
        )}
      </Content>
    </Container>
  );
};

export default Posts;
