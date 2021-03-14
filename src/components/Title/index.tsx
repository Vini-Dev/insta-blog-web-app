import { FC, HTMLAttributes } from 'react';

import { Container } from './styles';

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  children: string | any[];
  className?: string;
  variant?: 'display' | 'header' | 'title' | 'subtitle' | 'headline';
}

const Title: FC<TitleProps> = ({
  children,
  className = '',
  variant = 'title',
  ...props
}) => {
  return (
    <Container className={`root-title ${variant} ${className}`} {...props}>
      {children}
    </Container>
  );
};

export default Title;
