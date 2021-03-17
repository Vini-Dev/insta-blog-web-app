import { FC, HTMLAttributes } from 'react';

import { Container } from './styles';

interface InputErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  message?: string;
  fieldName: string;
  fieldLabel: string;
}

const InputErrorMessage: FC<InputErrorMessageProps> = ({
  className = '',
  fieldName,
  fieldLabel,
  message,
  ...props
}) => {
  if (!message) return null;

  return (
    <Container className={`root-input-error-message ${className}`} {...props}>
      {message.replace(fieldName, fieldLabel)}
    </Container>
  );
};

export default InputErrorMessage;
