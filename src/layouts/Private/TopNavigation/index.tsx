import { FC } from 'react';

import { IoIosHome, IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import Avatar from 'src/components/Avatar';

import { Container, Content, CustomLink } from './styles';

const TopNavigation: FC = () => {
  const location = useLocation();

  const links = [
    {
      pathname: '/',
      activeIcon: <IoIosHome />,
      inactiveIcon: <IoHomeOutline />,
    },
    {
      pathname: '/likes',
      activeIcon: <IoIosHeart />,
      inactiveIcon: <IoIosHeartEmpty />,
    },
  ];

  return (
    <Container>
      <Content>
        {links.map(({ activeIcon, inactiveIcon, pathname }) => {
          const icon =
            location.pathname === pathname ? activeIcon : inactiveIcon;

          return (
            <CustomLink key={pathname} to={pathname}>
              {icon}
            </CustomLink>
          );
        })}

        <Avatar size={32} />
      </Content>
    </Container>
  );
};

export default TopNavigation;
