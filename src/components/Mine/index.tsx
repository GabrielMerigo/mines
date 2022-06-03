import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as S from './styles';


export default function Mine(){

  return (
    <S.Container>
      <S.CoreMine></S.CoreMine>
      <S.Line></S.Line>
      <S.Line valueRotate="45deg"></S.Line>
      <S.Line valueRotate="90deg"></S.Line>
      <S.Line valueRotate="135deg"></S.Line>
    </S.Container>
  )
}
