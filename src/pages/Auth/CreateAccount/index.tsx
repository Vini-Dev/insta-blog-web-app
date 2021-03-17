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
import createAccountSchema from 'src/validators/auth/createAccount.schema';

import {
  Container,
  Content,
  LogIn,
  LogInLink,
  LogInLinkHighlight,
} from './styles';

interface FormData {
  name: string;
  user: string;
  password: string;
  password_confirmation: string;
}

const CreateAccount: FC = () => {
  const buttonRef = useRef<ButtonHandlers>(null);
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const authRequest = async (data: FormData) => {
    try {
      console.log({ data });
      const response = await api.post('/users', data);

      const { token, user } = response.data;
      dispatch(AuthActions.authSuccess(token, user));
    } catch (error) {
      const status = error.response.status;

      if (status === 422) {
        const errors = getApiErrors(error);
        if (errors) formRef.current?.setErrors(errors);
      } else if (status === 400) {
        const message = error.response.data.message;
        toast.warn(message);
      } else {
        toast.error('Error in server!');
      }

      buttonRef.current?.finishLoad();
    }
  };

  const handleOnSubmit: SubmitHandler<FormData> = async (formData) => {
    buttonRef.current?.startLoad();
    formRef.current?.setErrors({});

    try {
      const data: FormData = await createAccountSchema.validate(
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
        <Title variant="title">Create Account</Title>
        <Form ref={formRef} onSubmit={handleOnSubmit}>
          <Input id="name" label="Name" name="name" />
          <Input id="user" label="User" name="user" />
          <Input
            id="password"
            label="Password"
            name="password"
            type="password"
          />
          <Input
            id="password_confirmation"
            label="Confirm password"
            name="password_confirmation"
            type="password"
          />
          <Button ref={buttonRef} label="Create" type="submit" />
        </Form>
        <LogIn>
          <LogInLink to="/create-account">
            No have account?{' '}
            <LogInLinkHighlight>Sing up now!</LogInLinkHighlight>
          </LogInLink>
        </LogIn>
      </Content>
    </Container>
  );
};

export default CreateAccount;
