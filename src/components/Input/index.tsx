import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import { useField } from '@unform/core';
import masks, { clear } from 'magic-masks';
import InputErrorMessage from 'src/components/InputErrorMessage';
import Label from 'src/components/Label';

import ControlSecurityEntry from './ControlSecurityEntry';
import { Container, Field, FieldContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  mask?:
    | 'cellphone'
    | 'cellphoneOrPhone'
    | 'clear'
    | 'cnpj'
    | 'cpf'
    | 'cpfOrCnpj'
    | 'creditCard'
    | 'creditCardExpiry'
    | 'currency'
    | 'phone'
    | 'zipCode';
  returnUnmasked?: boolean;
}

export interface InputHandlers {
  setValue(value: string): void;
  field: HTMLInputElement | null;
}

const Input: ForwardRefRenderFunction<InputHandlers, InputProps> = (
  { id, label, name, mask, returnUnmasked = false, type, ...props },
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { clearError, fieldName, registerField, error } = useField(name);

  useImperativeHandle(
    ref,
    () => ({
      setValue: (value) => {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      },
      field: inputRef.current,
    }),
    [inputRef]
  );

  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name: fieldName,
        ref: inputRef,
        getValue: (ref) => {
          const { value } = ref.current;

          if (returnUnmasked) {
            return clear(value);
          }

          return value;
        },
        setValue: (ref, value = '') => {
          if (mask) {
            ref.current.value = masks[mask](String(value));
          } else {
            ref.current.value = value;
          }
        },
      });
    }
  }, [fieldName, registerField, mask, returnUnmasked]);

  const handleOnFocus = () => clearError();

  const handleOnChangeControlSecurityEntry = (showPassword) => {
    if (inputRef.current) {
      inputRef.current.type = showPassword ? 'text' : 'password';
    }
  };

  const handleOnChange = useCallback(
    (event) => {
      if (mask && inputRef.current) {
        const { value } = event.target;

        const updatedValue = masks[mask](value);
        inputRef.current.value = updatedValue;
      }
    },
    [mask]
  );

  return (
    <Container className={`root-input-container ${error}`}>
      <Label htmlFor={id}>{label}</Label>
      <FieldContainer>
        <Field
          ref={inputRef}
          className={`root-input-field ${error && 'error'}`}
          id={id}
          {...props}
          onFocus={handleOnFocus}
          onChange={handleOnChange}
        />
        {type === 'password' && (
          <ControlSecurityEntry onChange={handleOnChangeControlSecurityEntry} />
        )}
      </FieldContainer>
      <InputErrorMessage
        fieldLabel={label}
        fieldName={fieldName}
        message={error}
      />
    </Container>
  );
};

Input.displayName = 'input';

export default forwardRef(Input);
