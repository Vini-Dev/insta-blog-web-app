import {
  ChangeEvent,
  ComponentType,
  InputHTMLAttributes,
  FC,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';

import { useField } from '@unform/core';
import InputErrorMessage from 'src/components/InputErrorMessage';

import { Container, Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  onChangeImage?: (event: ChangeEvent<HTMLInputElement>) => void;
  previewComponentProps?: {
    [key: string]: any;
  };
  previewComponent: ComponentType<any>;
}

const ImageInput: FC<InputProps> = ({
  label,
  name,
  previewComponent: PreviewComponent,
  previewComponentProps,
  onChangeImage,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    clearError,
    fieldName,
    registerField,
    defaultValue,
    error,
  } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  const handlePreview = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        setPreview(null);
      }

      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);

      clearError();

      if (onChangeImage) onChangeImage(event);
    },
    [clearError, onChangeImage]
  );

  return (
    <>
      <Container htmlFor={fieldName} className="root-image-input">
        <PreviewComponent src={preview} {...previewComponentProps} />
        <Input
          id={fieldName}
          name={fieldName}
          type="file"
          ref={inputRef}
          onChange={handlePreview}
          {...rest}
          accept="image/jpg, image/jpeg, image/png"
        />
        <InputErrorMessage
          fieldLabel={label}
          fieldName={fieldName}
          message={error}
        />
      </Container>
    </>
  );
};

export default ImageInput;
