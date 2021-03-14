import { FC, HTMLAttributes } from 'react';

import { Container } from './styles';

interface InputErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
  className?: string;
}

const InputErrorMessage: FC<InputErrorMessageProps> = ({
  children = '',
  className = '',
  ...props
}) => {
  return (
    <Container className={`root-input-error-message ${className}`} {...props}>
      {children}
    </Container>
  );
};

export default InputErrorMessage;
