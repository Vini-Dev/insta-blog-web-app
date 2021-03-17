import { FC } from 'react';

import { IoIosHome, IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import Title from 'src/components/Title';

import { Container, Content, CustomLink, Links } from './styles';
import User from './User';

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
        <Title variant="subtitle">InstaBlog</Title>
        <Links>
          {links.map(({ activeIcon, inactiveIcon, pathname }) => {
            const icon =
              location.pathname === pathname ? activeIcon : inactiveIcon;

            return (
              <CustomLink key={pathname} to={pathname}>
                {icon}
              </CustomLink>
            );
          })}
          <User />
        </Links>
      </Content>
    </Container>
  );
};

export default TopNavigation;
