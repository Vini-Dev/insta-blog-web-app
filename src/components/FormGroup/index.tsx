import { FC } from 'react';

import { Container } from './styles';

interface FormGroupPropsInterface {
  columns: string;
  gap?: number;
}

const FormGroup: FC<FormGroupPropsInterface> = ({
  children,
  columns,
  gap = 16,
}) => {
  return (
    <Container columns={columns} gap={gap}>
      {children}
    </Container>
  );
};

export default FormGroup;
