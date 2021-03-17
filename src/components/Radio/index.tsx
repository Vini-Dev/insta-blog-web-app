import { FC, InputHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import { MdDone } from 'react-icons/md';
import InputErrorMessage from 'src/components/InputErrorMessage';
import Label from 'src/components/Label';

import { CheckMark, Container, Field, FieldLabel } from './styles';

export interface CheckboxOptionsInterface {
  value: string;
  label: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  options: CheckboxOptionsInterface[];
}

const Radio: FC<InputProps> = ({ label, name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { error, fieldName, registerField, defaultValue = [] } = useField(name);

  useEffect(() => {
    if (inputRefs.current)
      registerField({
        name: fieldName,
        ref: inputRefs.current,
        getValue: (refs: HTMLInputElement[]) => {
          const radio = refs.find((ref) => ref.checked);
          return radio?.value || '';
        },
        clearValue: (refs: HTMLInputElement[]) => {
          refs.forEach((ref) => {
            ref.checked = false;
          });
        },
        setValue: (refs: HTMLInputElement[], value: string) => {
          refs.forEach((ref) => {
            if (value === ref.value) {
              ref.checked = true;
            }
          });
        },
      });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container className="root-radio-container">
      <Label>{label}</Label>
      {options.map((option, index) => (
        <FieldLabel
          htmlFor={option.value + index}
          className="root-radio"
          key={index}
        >
          <Field
            defaultChecked={defaultValue.find(
              (dv: string) => dv === option.value
            )}
            ref={(ref) => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            name={fieldName}
            value={option.value}
            id={option.value + index}
            {...rest}
            type="radio"
          />
          <CheckMark>
            <MdDone />
          </CheckMark>
          {option.label}
        </FieldLabel>
      ))}
      <InputErrorMessage
        fieldLabel={label}
        fieldName={fieldName}
        message={error}
      />
    </Container>
  );
};

export default Radio;
