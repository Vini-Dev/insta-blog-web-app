import { FC, useCallback, useEffect, useState } from 'react';

import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

import { Container } from './styles';

interface ControlSecurityEntryProps {
  onChange(callback: boolean): void;
}

const ControlSecurityEntry: FC<ControlSecurityEntryProps> = ({ onChange }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  useEffect(() => onChange(secureTextEntry), [onChange, secureTextEntry]);

  // Mostra ou não, a senha
  const handlePressSecureTextEntry = useCallback(() => {
    setSecureTextEntry((bool) => !bool);
  }, []);

  return (
    <Container onClick={handlePressSecureTextEntry}>
      {!secureTextEntry ? <IoIosEyeOff /> : <IoIosEye />}
    </Container>
  );
};

export default ControlSecurityEntry;
