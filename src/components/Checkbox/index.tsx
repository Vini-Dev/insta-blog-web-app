import { FC, InputHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import { MdDone } from 'react-icons/md';
import InputErrorMessage from 'src/components/InputErrorMessage';

import { CheckMark, Container, Field, Label } from './styles';

export interface CheckboxOptionsInterface {
  value: string;
  label: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  options: CheckboxOptionsInterface[];
}

const Checkbox: FC<InputProps> = ({ label, name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { error, fieldName, registerField, defaultValue = [] } = useField(name);

  useEffect(() => {
    if (inputRefs.current)
      registerField({
        name: fieldName,
        ref: inputRefs.current,
        getValue: (refs: HTMLInputElement[]) => {
          const values = refs
            .filter((ref) => ref.checked)
            .map((ref) => ref.value);

          if (refs.length === 1) {
            return values[0];
          }

          return values;
        },
        clearValue: (refs: HTMLInputElement[]) => {
          refs.forEach((ref) => {
            ref.checked = false;
          });
        },
        setValue: (refs: HTMLInputElement[], value: string | string[]) => {
          const values = Array.isArray(value) ? value : [value];
          console.log(values);

          refs.forEach((ref) => {
            if (values.includes(ref.value)) {
              ref.checked = true;
            }
          });
        },
      });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container className="root-checkbox-container">
      {options.map((option, index) => (
        <Label
          htmlFor={option.value + index}
          className="root-checkbox"
          key={index}
        >
          <Field
            defaultChecked={defaultValue.find(
              (dv: string) => dv === option.value
            )}
            ref={(ref) => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            value={option.value}
            id={option.value + index}
            {...rest}
            type="checkbox"
          />
          <CheckMark>
            <MdDone />
          </CheckMark>
          {option.label}
        </Label>
      ))}
      <InputErrorMessage
        fieldLabel={label}
        fieldName={fieldName}
        message={error}
      />
    </Container>
  );
};

export default Checkbox;
