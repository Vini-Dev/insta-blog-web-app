import { FC, LabelHTMLAttributes } from 'react';

import { Container } from './styles';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: string;
}

const Label: FC<LabelProps> = ({ children, ...props }) => {
  return (
    <Container className="root-label" {...props}>
      {children}
    </Container>
  );
};

export default Label;
