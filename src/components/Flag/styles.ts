import styled, { css } from 'styled-components/native';
import { FlagProps } from '.';
import * as S from './styles';

const wrapperModifers = {
  flagPoleBigger: () => css`
    height: 28;
    width: 4;
    margin-left: 16;
  `,
  flagBigger: () => css`
    height: 10;
    width: 14;
    margin-left: 3;
  `,
  baseOneBigger: () => css`
    height: 4;
    width: 12;
    margin-top: 20;
    margin-left: 20;
  `,
  baseTwoBigger: () => css`
    height: 4;
    width: 20;
    margin-left: 8;
    margin-top: 24;
  `
}

export const Wrapper = styled.View`
  ${() => css`
    margin-top: 2;
  `}
`

export const FlagPole = styled.View<FlagProps>`
  ${({ bigger }) => css`
    position: absolute;
    height: 14;
    width: 2;
    background-color: #222;
    margin-left: 9;

    ${bigger && wrapperModifers.flagPoleBigger()};
  `}
`;

export const Flag = styled.View<FlagProps>`
  ${({ bigger }) => css`
    position: absolute;
    height: 5;
    width: 6;
    background-color: #F22;
    margin-left: 3;

    ${bigger && wrapperModifers.flagBigger()};
  `}
`;

export const BaseOne = styled.View<FlagProps>`
  ${({ bigger }) => css`
    position: absolute;
    height: 2;
    width:6;
    background-color: #222;
    margin-left: 7;

    ${bigger && wrapperModifers.baseOneBigger()};
  `}

`;

export const BaseTwo = styled.View<FlagProps>`
  ${({ bigger }) => css`
    position: absolute;
    height: 2;
    width: 10;
    background-color: #222;
    margin-left: 5;
    margin-top: 12;

    ${bigger && wrapperModifers.baseTwoBigger()};
  `}
`;