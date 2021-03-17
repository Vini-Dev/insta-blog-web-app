import { FC } from 'react';

import { Container } from './styles';

interface ImagePreviewProps {
  src: string;
}

const ImagePreview: FC<ImagePreviewProps> = ({ src }) => {
  return <Container src={src} />;
};

export default ImagePreview;
