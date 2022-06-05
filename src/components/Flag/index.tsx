import React from 'react';
import * as S from './styles';

export type FlagProps = {
  bigger: boolean
}

export default function Flag({ bigger }: FlagProps){
  return (
    <S.Wrapper bigger={bigger}>
      <S.FlagPole />
      <S.Flag />
      <S.BaseOne />
      <S.BaseTwo />
    </S.Wrapper>
  )
}
