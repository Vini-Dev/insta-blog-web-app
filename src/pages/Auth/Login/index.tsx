import { FC, useRef } from 'react';

import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button, { ButtonHandlers } from 'src/components/Button';
import Input from 'src/components/Input';
import Title from 'src/components/Title';
import { defaultOptions, formatErrors } from 'src/libs/yup';
import api from 'src/services/api';
import { Creators as AuthActions } from 'src/store/ducks/auth';
import getApiErrors from 'src/utils/getApiErrors';
import loginSchema from 'src/validators/auth/login.schema';

import {
  Container,
  Content,
  ForgotMyPasswordButton,
  ForgotMyPasswordContainer,
} from './styles';

interface FormData {
  user: string;
  password: string;
}

const Login: FC = () => {
  const buttonRef = useRef<ButtonHandlers>(null);
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const dispatch = useDispatch();

  const authRequest = async (data: FormData) => {
    try {
      console.log({ data });
      const response = await api.post('/sessions', data);

      const { token, user } = response.data;
      dispatch(AuthActions.authSuccess(token, user));
    } catch (error) {
      console.log({ error });

      const errors = getApiErrors(error);

      if (errors) formRef.current?.setErrors(errors);

      buttonRef.current?.finishLoad();
    }
  };

  const handleOnSubmit: SubmitHandler<FormData> = async (formData) => {
    buttonRef.current?.startLoad();
    formRef.current?.setErrors({});

    try {
      const data: FormData = await loginSchema.validate(
        formData,
        defaultOptions
      );

      authRequest(data);
    } catch (error) {
      if (error?.inner) {
        formRef.current?.setErrors(formatErrors(error.inner));
      }

      buttonRef.current?.finishLoad();
    }
  };

  const handleOnClickForgotMyPassword = () => {
    const user = formRef.current?.getFieldValue('user');

    history.push('esqueci-minha-senha', {
      user,
    });
  };

  return (
    <Container>
      <Content>
        <Title variant="title">Login</Title>
        <Form ref={formRef} onSubmit={handleOnSubmit}>
          <Input id="user" label="User" name="user" />
          <Input
            id="password"
            label="Password"
            name="password"
            type="password"
          />
          <Button ref={buttonRef} label="Entrar" type="submit" />
        </Form>
        <ForgotMyPasswordContainer>
          <ForgotMyPasswordButton
            type="button"
            onClick={handleOnClickForgotMyPassword}
          >
            Esqueci minha senha
          </ForgotMyPasswordButton>
        </ForgotMyPasswordContainer>
      </Content>
    </Container>
  );
};

export default Login;
