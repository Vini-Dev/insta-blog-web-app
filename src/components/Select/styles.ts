import styled from 'styled-components';

import ReactSelect from 'react-select';
import { ThemeType } from 'src/styles/themes/light';

interface SelectAttr extends ThemeType {
  isMulti: boolean;
  error: boolean;
}

export const Container = styled.div`
  width: 100%;

  .root-label {
    margin-bottom: 2px;
  }
`;

export const Field = styled(ReactSelect).attrs(
  ({ error, isMulti, theme }: SelectAttr) => ({
    styles: {
      control: (provided, state) => ({
        ...provided,
        height: isMulti ? 'auto' : 48,
        borderRadius: 8,
        paddingRight: 3,
        paddingLeft: 3,
        border: `1px solid ${error ? theme.error : theme.input.normal.border}`,
        borderColor: state.isFocused
          ? `${theme.input.normal.border} !important`
          : 'inherit',
        backgroundColor: theme.input.normal.background,
        boxShadow: 'none',
      }),
    },
  })
)``;
