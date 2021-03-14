import { FC } from 'react';

import { useLocation } from 'react-router-dom';
import Avatar from 'src/components/Avatar';
// import { ReactComponent as Logo } from 'src/assets/svg/logo.svg';
import routes from 'src/routes';

import { Container, Content, CustomLink, Grid, Links } from './styles';

const TopNavigation: FC = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <Grid>
          <Links>
            {routes
              .filter(({ type }) => type === 'private')
              .map(({ label, path }) => (
                <CustomLink
                  className={pathname.includes(path) ? 'active' : ''}
                  key={path}
                  to={path}
                >
                  {label}
                </CustomLink>
              ))}
          </Links>
        </Grid>
        <Avatar size={32} />
      </Content>
    </Container>
  );
};

export default TopNavigation;
