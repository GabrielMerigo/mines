import styled, { css } from 'styled-components/native';

const wrappersModifers = {
  isRotate: (deg: string) => css`
    transform: rotate(${deg});
  `
}

export const Container = styled.View`
  ${() => css`
    align-items: center;
    justify-content: center;
  `}
`

export const CoreMine = styled.View`
  ${() => css`
    height: 14;
    width: 14;
    border-radius: 10;
    background-color: black;
    align-items: center;
    justify-content: center;
  `}
`

export const Line = styled.View<{ valueRotate?: string }>`
  ${({ valueRotate }) => css`
    position: absolute;
    height: 3;
    width: 20;
    border-radius: 3,
    background-color: black;

    ${wrappersModifers.isRotate(valueRotate!)}
  `}
`