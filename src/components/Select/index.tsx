import { FC, useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import { OptionTypeBase } from 'react-select';
import InputErrorMessage from 'src/components/InputErrorMessage';
import Label from 'src/components/Label';

import { Container, Field } from './styles';

export interface SelectOptionsInterface {
  value: string;
  label: string;
}

interface SelectPropsInterface {
  label: string;
  name: string;
  isMulti?: boolean;
  loading?: boolean;
  isSearchable?: boolean;
  options: SelectOptionsInterface[];
}

const Select: FC<SelectPropsInterface> = ({
  isMulti = false,
  isSearchable = false,
  label,
  loading = false,
  name,
  ...rest
}) => {
  const selectRef = useRef(null);

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    if (selectRef.current)
      registerField({
        name: fieldName,
        ref: selectRef.current,
        getValue: (ref: any) => {
          if (isMulti) {
            if (!ref.state.value) {
              return [];
            }
            return ref.state.value.map(
              (option: OptionTypeBase) => option.value
            );
          }

          if (!ref.state.value) {
            return '';
          }

          return ref.state.value.value;
        },
        setValue: (ref: any, value: string) => {
          let option = '';

          if (isMulti) {
            option = ref.select.props.options.filter((opt) =>
              value.includes(opt.value)
            );
          } else {
            option = ref.select.props.options.find(
              (opt) => opt.value === value
            );
          }

          ref.select.setValue(option);
        },
      });
  }, [selectRef, fieldName, registerField, isMulti]);

  return (
    <Container className="root-select-container">
      <Label>{label}</Label>
      <Field
        ref={selectRef}
        classNamePrefix="react-select"
        error={error}
        isSearchable={isSearchable}
        loading={loading}
        isMulti={isMulti}
        {...rest}
      />
      {error && (
        <InputErrorMessage>{error.replace(name, label)}</InputErrorMessage>
      )}
    </Container>
  );
};

export default Select;
