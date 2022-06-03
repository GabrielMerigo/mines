import styled, { css } from 'styled-components/native';
import { FieldProps } from '.';
import { params } from '../../params';

const wrappersModifers = {
  regular: () => css`
    background-color: '#999';
    border-left-color: '#CCC';
    border-top-color: #CCC;
    border-right-color: '#333';
    border-bottom-color: '#333';

    
  `,
  opened: () => css`
    background-color: '#999';
    border-color: '#777';
    align-items:center;
    justify-content:center;
  `
}

export const Field = styled.View<Pick<FieldProps, 'opened'>>`
  ${({ opened }) => css`
    height: ${params.blockSize};
    width: ${params.blockSize};
    border-width: ${params.borderSize};
    ${wrappersModifers.regular()}

    ${opened && wrappersModifers.opened()}
  `}
`

export const Label = styled.Text<{ color: string }>`
  font-weight: 'bold',
`;