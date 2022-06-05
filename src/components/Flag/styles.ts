import styled, { css } from 'styled-components/native';
import { FlagProps } from '.';

const wrapperModifers = {
  flagPoleBigger: () => css`
    ${FlagPole}{
      height: 28;
      width: 4;
      margin-left: 16;
    }
  `,
  
}

export const Wrapper = styled.View<FlagProps>`
  ${({ bigger }) => css`
    margin-top: 2;

    ${bigger && wrapperModifers.flagPoleBigger()}
  `}
`

export const FlagPole = styled.View`
  ${() => css`
    position: absolute;
    height: 14;
    width: 2;
    background-color: #222;
    margin-left: 9;
  `}
`
export const Flag = styled.View`
  position: absolute;
  height: 5;
  width: 6;
  background-color: #F22;
  margin-left: 3;
`

export const BaseOne = styled.View`
  position: absolute;
  height: 2;
  width:6;
  background-color: #222;
  margin-left: 7;
`

export const BaseTwo = styled.View`
  position: absolute;
  height: 2;
  width: 10;
  background-color: #222;
  margin-left: 5;
  margin-top: 12;
`


//**************************************/

export const FlagBigger = styled.View`
  height: 10;
  width: 14;
  margin-left: 3;
`;

export const BaseOneBigger = styled.View`
  height: 4;
  width: 12;
  margin-top: 20;
  margin-left: 20;
`;

export const BaseTwoBigger = styled.View`
  height: 4;
  width: 20;
  margin-left: 8;
  margin-top: 24;
`;