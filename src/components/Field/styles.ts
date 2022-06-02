import styled, { css } from 'styled-components/native';
import { params } from '../../params';

const wrappersModifers = {
  regular: () => css`
    background-color: '#999';
    border-left-color: '#CCC';
    border-top-color: #CCC;
    border-right-color: '#333';
    border-bottom-color: '#333';
  `
}

export const Field = styled.View`
  ${() => css`
    height: ${params.blockSize};
    width: ${params.blockSize};
    border-width: ${params.borderSize};
    ${wrappersModifers.regular()}
  `}
`