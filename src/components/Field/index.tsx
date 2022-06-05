import React from 'react';
import * as S from './styles';
import Mine from '../Mine';
import Flag from '../Flag';

export type FieldProps = {
  mined?: boolean;
  opened?: boolean
  nearMines?: number
  exploded?: boolean
  flagged?: boolean
}

export default function Field({ 
  mined, 
  opened, 
  nearMines = 0, 
  exploded, 
  flagged 
}: FieldProps){
  let color = '';
  
  if(nearMines > 0){
    if(nearMines === 1) color = '#2A28D7'
    if(nearMines === 2) color = '#2B520F'
    if(nearMines > 2 && nearMines < 6) color = '#fc3b3f'
    if(nearMines >= 6) color = '#F221A9'
  }

  return (
    <S.Wrapper opened={opened} exploded={exploded} flagged={flagged}>
      {!mined && opened && nearMines > 0 
        ? <S.Label color={color}>{nearMines}</S.Label>
        : false
      }
      {mined && opened ? <Mine /> : false}
      {flagged && !opened ? <Flag /> : false}
    </S.Wrapper>
  )
}
