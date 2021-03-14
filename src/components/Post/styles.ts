import styled from 'styled-components';

import { sizes } from 'src/styles/devices';
import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div``;

export const Description = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }: ThemeType) => theme.gray6};
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  border-radius: 16px;
  overflow: hidden;

  box-shadow: 0px 10px 10px -10px rgba(33, 35, 38, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  /* max-width: ${sizes.mobileL}; */
  max-height: ${sizes.mobileL};

  object-fit: cover;
`;

export const User = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;

  width: 100%;
  padding: 16px;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.53) 0%,
    rgba(0, 0, 0, 0.76) 0.01%,
    rgba(255, 255, 255, 0) 100%
  );

  .root-avatar {
    margin-right: 16px;
  }
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
`;

export const Controls = styled.div`
  padding: 8px 0;
`;

interface LikeButtonInterface extends ThemeType {
  liked: boolean;
}
export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  background: none;
  border: none;

  svg {
    font-size: 24px;
    color: ${({ liked, theme }: LikeButtonInterface) =>
      liked ? theme.success : theme.gray3};

    transition: 200ms linear color;
  }
`;
