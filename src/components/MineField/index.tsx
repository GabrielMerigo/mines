import React from "react";
import {  View } from "react-native"  ;
import Field from "../Field";
import { Board } from "../functions";
import * as S from './styles';

type MineFieldProps = {
  board: Board[][]
}

export default function MineField({ board }: MineFieldProps){
  const rows = board.map((row, i) => {
    const columns = row.map((field, i) => {
      return (<Field {...field} key={i} />)
    })

    return <View key={i}>{columns}</View>
  })
  return <S.Container>{rows}</S.Container>
}