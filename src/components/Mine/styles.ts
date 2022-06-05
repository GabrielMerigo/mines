import styled, { css } from 'styled-components/native';

type LineProps = {
  isRotate45?: boolean
  isRotate90?: boolean
  isRotate145?: boolean
}

const wrappersModifers = {
  isRotate45: () => css`
    transform: rotate(45deg);
  `,
  isRotate90: () => css`
    transform: rotate(90deg);
  `,
  isRotate145: () => css`
    transform: rotate(145deg);
  `
};

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

export const Line = styled.View<LineProps>`
  ${({ isRotate45, isRotate90, isRotate145 }) => css`
    position: absolute;
    height: 3;
    width: 20;
    border-radius: 3;
    background-color: black;

    ${isRotate45 && wrappersModifers.isRotate45()}
    ${isRotate90 && wrappersModifers.isRotate90()}
    ${isRotate145 && wrappersModifers.isRotate145()}
  `}
`