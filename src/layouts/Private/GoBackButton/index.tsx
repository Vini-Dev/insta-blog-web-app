import { FC, useEffect, useState } from 'react';

import { IoMdArrowBack } from 'react-icons/io';
import { useHistory, useLocation } from 'react-router-dom';

import { Container } from './styles';

const GoBackButton: FC = () => {
  const history = useHistory();
  const location = useLocation();

  const [control, setControl] = useState({
    count: 0,
    lastAction: '',
  });

  useEffect(() => {
    setControl(({ count, lastAction }) => ({
      count: lastAction === 'goBack' ? count : count + 1,
      lastAction: 'change',
    }));
  }, [location]);

  const handleOnClick = () => {
    history.go(-1);

    setControl(({ count }) => ({
      count: count - 1,
      lastAction: 'goBack',
    }));
  };

  console.log({ control });

  return (
    <Container
      type="button"
      onClick={handleOnClick}
      disabled={control.count === 1}
    >
      <IoMdArrowBack />
    </Container>
  );
};

export default GoBackButton;
