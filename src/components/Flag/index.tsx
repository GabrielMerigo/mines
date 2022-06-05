import React from 'react';
import * as S from './styles';

export type FlagProps = {
  bigger?: boolean
}

export default function Flag({ bigger }: FlagProps){
  return (
    <S.Wrapper>
      <S.FlagPole bigger={bigger} />
      <S.Flag bigger={bigger} />
      <S.BaseOne bigger={bigger} />
      <S.BaseTwo bigger={bigger} />
    </S.Wrapper>
  )
}
