import {
  forwardRef,
  ForwardRefRenderFunction,
  HTMLAttributes,
  useImperativeHandle,
  useState,
  useRef,
} from 'react';

import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { IoIosClose } from 'react-icons/io';
import { toast } from 'react-toastify';
import Button, { ButtonHandlers } from 'src/components/Button';
import ImageInput from 'src/components/ImageInput';
import Textarea from 'src/components/Textarea';
import Title from 'src/components/Title';
import { defaultOptions, formatErrors } from 'src/libs/yup';
import api from 'src/services/api';
import getApiErrors from 'src/utils/getApiErrors';
import storeSchema from 'src/validators/post/store.schema';

import ImagePreview from './ImagePreview';
import { CloseButton, Container, Content } from './styles';

interface FormData {
  image: string;
  description: string;
}

export interface ModalHandlers {
  show(): void;
  hide(): void;
}

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  onPost: () => void;
}

const Modal: ForwardRefRenderFunction<ModalHandlers, ModalProps> = (
  { onPost },
  ref
) => {
  const buttonRef = useRef<ButtonHandlers>(null);
  const formRef = useRef<FormHandles>(null);

  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => {
      setShow(true);
    },
    hide: () => {
      setShow(true);
    },
  }));

  const uploadImage = async (postId, image) => {
    const formData = new FormData();

    formData.append('image', image);

    try {
      await api.put(`/posts/${postId}/image`, formData);
      toast.success('Success when upload post!');

      setShow(false);
      onPost();
    } catch (error) {
      toast.error('Ops, error when upload post...');
    }
  };

  const postRequest = async (data: FormData, image: any) => {
    try {
      const response = await api.post('/posts', data);
      const postId = response.data._id;
      console.log({ response, postId });

      uploadImage(postId, image);
      // toast.success('Success when update data!');
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
      const image = formData?.image ? 'has' : '';
      const data: FormData = await storeSchema.validate(
        { ...formData, image },
        defaultOptions
      );

      postRequest(data, formData.image);
    } catch (error) {
      if (error?.inner) {
        formRef.current?.setErrors(formatErrors(error.inner));
        toast.warn('Ops, verify the form...');
      }

      buttonRef.current?.finishLoad();
    }
  };

  const handleOnClickClose = () => setShow(false);

  if (!show) return null;

  return (
    <Container>
      <Content>
        <Title variant="subtitle">New Post</Title>
        <CloseButton type="button" onClick={handleOnClickClose}>
          <IoIosClose />
        </CloseButton>
        <Form ref={formRef} onSubmit={handleOnSubmit}>
          <ImageInput
            label="Image"
            name="image"
            previewComponent={ImagePreview}
          />
          <Textarea id="description" label="Description" name="description" />
          <Button ref={buttonRef} label="Save" type="submit" />
        </Form>
      </Content>
    </Container>
  );
};

Modal.displayName = 'Modal';

export default forwardRef(Modal);
