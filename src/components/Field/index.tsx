import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { params } from '../../params';
import * as S from './styles';

export type FieldProps = {
  mined?: string
  opened?: boolean
  nearMines?:number
}

export default function Field({ mined, opened, nearMines = 0 }: FieldProps){
  let color = '';
  
  if(nearMines > 0){
    if(nearMines === 1) color = '#2A28D7'
    if(nearMines === 2) color = '#2B520F'
    if(nearMines > 2 && nearMines < 6) color = '#fc3b3f'
    if(nearMines >= 6) color = '#F221A9'
  }

  return (
    <S.Field opened={opened}>
      {!mined && opened && nearMines > 0 
        ? <S.Label color={color}>{nearMines}</S.Label>
        : false
      }
    </S.Field>
  )
}
