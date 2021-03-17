import { FC } from 'react';

import { IoIosPerson } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from 'src/components/Avatar';
import Button from 'src/components/Button';
import { RootState } from 'src/store/ducks/index';

import {
  Biography,
  BiographyContent,
  BiographyTitle,
  Container,
  ProfileNames,
  Name,
  Username,
  User,
} from './styles';

const Profile: FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Container>
      <User>
        <Link to="/profile">
          <Avatar size={48} icon={IoIosPerson} src={user.avatar_url} />
          <ProfileNames>
            <Username>{user.user}</Username>
            <Name>{user.name}</Name>
          </ProfileNames>
        </Link>
      </User>
      <Biography>
        <BiographyTitle>Bio</BiographyTitle>
        {user.biography ? (
          <BiographyContent>{user.biography}</BiographyContent>
        ) : (
          <Link to="/profile">
            <Button label="Add bio" variant="line" />
          </Link>
        )}
      </Biography>
    </Container>
  );
};

export default Profile;
