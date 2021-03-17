import { ComponentType, FC } from 'react';

import { Container } from './styles';

interface AvatarPropsInterface {
  icon?: ComponentType;
  iconSize?: number;
  size?: number;
  src?: string;
}

const Avatar: FC<AvatarPropsInterface> = ({
  icon: Icon,
  iconSize = 16,
  size = 45,
  src,
}) => {
  return (
    <Container
      className="root-avatar"
      size={size}
      src={src}
      iconSize={iconSize}
    >
      {Icon && <Icon />}
    </Container>
  );
};

export default Avatar;
