import {
  ComponentType,
  ForwardRefRenderFunction,
  forwardRef,
  ButtonHTMLAttributes,
  useContext,
  useImperativeHandle,
  useState,
} from 'react';

import { ThemeContext } from 'styled-components';

import BeatLoader from 'react-spinners/BeatLoader';

import { Container, Span } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | 'default'
    | 'error'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning';
  icon?: ComponentType;
  label: string;
  variant?: 'line' | 'normal' | 'outline';
}

export interface ButtonHandlers {
  finishLoad(): void;
  startLoad(): void;
}

const Button: ForwardRefRenderFunction<ButtonHandlers, ButtonProps> = (
  {
    color = 'primary',
    icon: Icon,
    label,
    onClick,
    type = 'button',
    variant = 'normal',
    ...props
  },
  ref
) => {
  const [loading, setLoading] = useState(false);
  const themeContext = useContext(ThemeContext);

  useImperativeHandle(ref, () => ({
    finishLoad: () => setLoading(false),
    startLoad: () => setLoading(true),
  }));

  return (
    <Container
      className={`root-button ${loading && 'loading'} ${Icon && 'button-icon'}`}
      onClick={onClick}
      type={type}
      color={color}
      variant={variant}
      disabled={loading}
      {...props}
    >
      {Icon && <Icon />}
      {!loading ? (
        <Span>{label}</Span>
      ) : (
        <BeatLoader
          size={12}
          color={themeContext?.button?.normal[color]?.foreground}
        />
      )}
    </Container>
  );
};

Button.displayName = 'button';

export default forwardRef(Button);
