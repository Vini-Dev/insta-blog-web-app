import {
  FC,
  TextareaHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import { useField } from '@unform/core';
import InputErrorMessage from 'src/components/InputErrorMessage';
import Label from 'src/components/Label';

import { Container, Field, FieldContainer } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: FC<TextareaProps> = ({ id, label, name, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { clearError, fieldName, registerField, error } = useField(name);

  useEffect(() => {
    if (textareaRef.current) {
      registerField({
        name: fieldName,
        ref: textareaRef,
        getValue: (ref) => ref.current.value,
        setValue: (ref, value) => {
          ref.current.value = value;
        },
      });
    }
  }, [fieldName, registerField]);

  const handleOnFocus = () => clearError();

  return (
    <Container className={`root-textarea-container ${error}`}>
      <Label htmlFor={id}>{label}</Label>
      <FieldContainer>
        <Field
          ref={textareaRef}
          className={`root-textarea-field ${error && 'error'}`}
          id={id}
          {...props}
          onFocus={handleOnFocus}
        />
      </FieldContainer>
      {error && (
        <InputErrorMessage>{error.replace(name, label)}</InputErrorMessage>
      )}
    </Container>
  );
};

export default Textarea;
