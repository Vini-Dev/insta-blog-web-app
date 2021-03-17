import { FC } from 'react';

import { IoIosPerson } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from 'src/components/Avatar';
import { RootState } from 'src/store/ducks/index';

const User: FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Link to="/profile">
      <Avatar size={32} src={user.avatar_url} icon={IoIosPerson} />
    </Link>
  );
};

export default User;
