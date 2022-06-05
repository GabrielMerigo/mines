import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as S from './styles';


export default function Mine(){

  return (
    <S.Container>
      <S.CoreMine></S.CoreMine>
      <S.Line></S.Line>
      <S.Line isRotate45></S.Line>
      <S.Line isRotate90></S.Line>
      <S.Line isRotate145></S.Line>
    </S.Container>
  )
}
