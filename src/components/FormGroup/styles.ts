import styled from 'styled-components';

interface ContainerPropsInterface {
  columns: string;
  gap?: number;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }: ContainerPropsInterface) => columns};
  grid-template-rows: 1fr;
  grid-gap: ${({ gap }: ContainerPropsInterface) => gap}px;
`;
