import styled from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div``;

export const User = styled.div`
  .root-avatar {
    margin-right: 8px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const ProfileNames = styled.div``;

export const Username = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }: ThemeType) => theme.gray6};
`;

export const Name = styled.div`
  display: flex;
  align-items: center;

  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }: ThemeType) => theme.gray3};
`;

export const Biography = styled.div`
  margin-top: 16px;
`;

export const BiographyTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }: ThemeType) => theme.gray6};

  margin-bottom: 8px;
`;

export const BiographyContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }: ThemeType) => theme.gray3};
`;
