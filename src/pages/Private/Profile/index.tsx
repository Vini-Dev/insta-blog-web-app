import { FC, useEffect, useRef } from 'react';

import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { IoIosImage } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Avatar from 'src/components/Avatar';
import Button, { ButtonHandlers } from 'src/components/Button';
import ImageInput from 'src/components/ImageInput';
import Input from 'src/components/Input';
import Textarea from 'src/components/Textarea';
import Title from 'src/components/Title';
import { defaultOptions, formatErrors } from 'src/libs/yup';
import api from 'src/services/api';
import { Creators as AuthActions } from 'src/store/ducks/auth';
import { RootState } from 'src/store/ducks/index';
import getApiErrors from 'src/utils/getApiErrors';
import updateSchema from 'src/validators/user/update.schema';

import { Container, Content } from './styles';

interface FormData {
  name: string;
  biography: string;
}

const Profile: FC = () => {
  const buttonRef = useRef<ButtonHandlers>(null);
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const avatar = user?.avatar_url;
    formRef.current?.setData({ ...user, avatar });
  }, [user]);

  const updateUserRequest = async (data: FormData) => {
    try {
      console.log({ data });
      const response = await api.put('/users', data);
      toast.success('Success when update data!');
      dispatch(AuthActions.authUpdateUser(response.data));
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
    } finally {
      buttonRef.current?.finishLoad();
    }
  };

  const handleOnSubmit: SubmitHandler<FormData> = async (formData) => {
    buttonRef.current?.startLoad();
    formRef.current?.setErrors({});

    try {
      const data: FormData = await updateSchema.validate(
        formData,
        defaultOptions
      );

      updateUserRequest(data);
    } catch (error) {
      if (error?.inner) {
        formRef.current?.setErrors(formatErrors(error.inner));
        toast.warn('Ops, verify the form...');
      }

      buttonRef.current?.finishLoad();
    }
  };

  const handleOnChangeImage = async (event) => {
    const formData = new FormData();

    const file = event.target.files?.[0];
    formData.append('avatar', file);

    try {
      const response = await api.put('/users/avatar', formData);
      toast.success('Success when update avatar!');
      dispatch(AuthActions.authUpdateUser(response.data));
    } catch (error) {
      toast.error('Ops, error when upload the avatar image...');
    }
  };

  const handleOnClickLogout = () => {
    dispatch(AuthActions.authLogout());
  };

  return (
    <Container>
      <Content>
        <Title variant="title">Profile</Title>
        <Form ref={formRef} onSubmit={handleOnSubmit}>
          <ImageInput
            label="Avatar"
            name="avatar"
            previewComponent={Avatar}
            previewComponentProps={{
              size: 128,
              iconSize: 64,
              icon: IoIosImage,
            }}
            onChangeImage={handleOnChangeImage}
          />
          <Input id="name" label="Name" name="name" />
          <Textarea id="biography" label="Biography" name="biography" />
          <Button ref={buttonRef} label="Save" type="submit" />
          <Button
            label="Logout"
            variant="line"
            color="error"
            onClick={handleOnClickLogout}
          />
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
