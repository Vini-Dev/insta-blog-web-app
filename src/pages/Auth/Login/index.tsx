import { FC, useRef } from 'react';

import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Button, { ButtonHandlers } from 'src/components/Button';
import Input from 'src/components/Input';
import Title from 'src/components/Title';
import { defaultOptions, formatErrors } from 'src/libs/yup';
import api from 'src/services/api';
import { Creators as AuthActions } from 'src/store/ducks/auth';
import getApiErrors from 'src/utils/getApiErrors';
import loginSchema from 'src/validators/auth/login.schema';

import {
  CreateAccount,
  CreateAccountLink,
  CreateAccountLinkHighlight,
  Container,
  Content,
} from './styles';

interface FormData {
  user: string;
  password: string;
}

const Login: FC = () => {
  const buttonRef = useRef<ButtonHandlers>(null);
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const authRequest = async (data: FormData) => {
    try {
      console.log({ data });
      const response = await api.post('/sessions', data);

      const { token, user } = response.data;
      dispatch(AuthActions.authSuccess(token, user));
    } catch (error) {
      const status = error?.response?.status;

      if (status === 422) {
        const errors = getApiErrors(error);
        if (errors) formRef.current?.setErrors(errors);
      } else if (status === 400) {
        const message = error.response.data.message;
        toast.warn(message);
      } else if (status === 404) {
        formRef.current?.setFieldError('user', 'User not found');
      } else {
        toast.error(`Error in server!`);
      }

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
        toast.warn('Ops, verify the form...');
      }

      buttonRef.current?.finishLoad();
    }
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
          <Button ref={buttonRef} label="Log In" type="submit" />
        </Form>
        <CreateAccount>
          <CreateAccountLink to="/create-account">
            No have account?{' '}
            <CreateAccountLinkHighlight>
              Sing up now!
            </CreateAccountLinkHighlight>
          </CreateAccountLink>
        </CreateAccount>
      </Content>
    </Container>
  );
};

export default Login;
