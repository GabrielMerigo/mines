import React from "react";
import { View } from "react-native"  ;
import Field from "../Field";
import { Board } from "../functions";
import * as S from './styles';

type MineFieldProps = {
  board: Board[][],
  onOpenField?: (iR: number, iC: number) => void;
}

export default function MineField({ board, onOpenField }: MineFieldProps){
  const rows = board.map((row, iR) => {
    const columns = row.map((field, iC) => {
      return (<Field {...field} key={iC} onOpen={() => onOpenField!(iR, iC) } />)
    })

    return <View key={iR}>{columns}</View>
  })
  return <S.Container>{rows}</S.Container>
}