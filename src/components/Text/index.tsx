import { FC, HTMLAttributes } from 'react';

import { Container } from './styles';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: string | any[];
  className?: string;
  variant?: 'body' | 'caption';
}

const Text: FC<TextProps> = ({
  children,
  className = '',
  variant = 'body',
  ...props
}) => {
  return (
    <Container className={`root-text ${variant} ${className}`} {...props}>
      {children}
    </Container>
  );
};

export default Text;
