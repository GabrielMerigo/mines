import styled, { css } from 'styled-components/native';
import { FieldProps } from '.';
import { params } from '../../params';

const wrappersModifers = {
  opened: () => css`
    background: #777;
    border-color: #555;
    align-items: center;
    justify-content: center;
  `,  
  regular: () => css`
    background-color: #999;
    border-left-color: #CCC;
    border-top-color: #CCC;
    border-right-color: #333;
    border-bottom-color: #333;
  `,
  exploded: () => css`
    background-color: red;
    border-color: red;
  `
}

export const Field = styled.View<Pick<FieldProps, 'opened' | 'exploded'>>`
  ${({ opened, exploded }) => css`
    height: ${params.blockSize};
    width: ${params.blockSize};

    border-width: ${params.borderSize};
    ${opened && wrappersModifers.opened()};
    ${exploded && wrappersModifers.exploded()};
    ${!opened && wrappersModifers.regular()};
  `}
`

export const Label = styled.Text<{ color: string }>`
  ${({ color }) => css`
    color: ${color};
    font-weight: bold;
    font-size: ${params.fontSize};
  `}
`;