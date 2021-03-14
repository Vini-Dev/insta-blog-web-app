import { FC } from 'react';

import { useSelector } from 'react-redux';
import Avatar from 'src/components/Avatar';
import { RootState } from 'src/store/ducks/index';

import {
  Biography,
  BiographyContent,
  BiographyTitle,
  Container,
  Name,
  User,
} from './styles';

const Profile: FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Container>
      <User>
        <Avatar size={48} />
        <Name>{user.name}</Name>
      </User>
      <Biography>
        <BiographyTitle>Bio</BiographyTitle>
        <BiographyContent>{user.biography}</BiographyContent>
      </Biography>
    </Container>
  );
};

export default Profile;
