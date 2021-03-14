import styled, { css } from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

interface ButtonThemeProps extends ThemeType {
  color: string;
  variant: string;
}

const getBase = (theme) => css`
  border-radius: 8px;
  height: 48px;
  padding: 0px 24px;

  &:disabled {
    cursor: not-allowed;
  }

  &:not(.loading):disabled {
    color: ${theme.button.disabled.foreground};
    background-color: ${theme.button.disabled.background};
    border: 1px solid ${theme.button.disabled.border};

    svg {
      color: ${theme.button.disabled.foreground};
    }
  }
`;

export const Container = styled.button`
  font-size: 15px;
  font-weight: 400;

  /* text-transform: uppercase; */
  transition: background-color 200ms linear, border-color 200ms linear;

  &.button-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 20px;
      margin-right: 8px;
    }
  }

  ${({ color, theme, variant }: ButtonThemeProps) => {
    if (variant === 'line') {
      return css`
        &[color] {
          color: ${theme.button.line[color].foreground};
          background: none;
          border: none;

          svg {
            color: ${theme.button.line[color].foreground};
          }

          :hover {
            color: ${theme.button.line[color].hover.foreground};

            svg {
              color: ${theme.button.line[color].hover.foreground};
            }
          }
        }
      `;
    }

    if (variant === 'normal') {
      return css`
        &[color] {
          color: ${theme.button.normal[color].foreground};
          background-color: ${theme.button.normal[color].background};
          border: 1px solid ${theme.button.normal[color].border};

          svg {
            color: ${theme.button.normal[color].foreground};
          }

          :hover {
            color: ${theme.button.normal[color].hover.foreground};
            background-color: ${theme.button.normal[color].hover.background};
            border-color: ${theme.button.normal[color].hover.border};

            svg {
              color: ${theme.button.normal[color].hover.foreground};
            }
          }
        }

        ${getBase(theme)};
      `;
    }

    // Outline
    return css`
      color: ${theme.button.outline[color].foreground};
      background-color: ${theme.button.outline[color].background};
      border: 1px solid ${theme.button.outline[color].border};

      svg {
        color: ${theme.button.outline[color].foreground};
      }

      :hover {
        color: ${theme.button.outline[color].hover.foreground};
        background-color: ${theme.button.outline[color].hover.background};
        border-color: ${theme.button.outline[color].hover.border};

        svg {
          color: ${theme.button.outline[color].hover.foreground};
        }
      }

      ${getBase(theme)};
    `;
  }}
`;

export const Span = styled.span``;
