import { FC } from 'react';

import { Container } from './styles';

interface AvatarPropsInterface {
  size?: number;
}

const Avatar: FC<AvatarPropsInterface> = ({ size = 45 }) => {
  return <Container className="root-avatar" size={size} />;
};

export default Avatar;
