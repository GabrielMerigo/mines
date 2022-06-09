import React, { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MineField from './src/components/MineField';
import { params } from './src/params';
import { Alert } from 'react-native';
import { 
  createMinedBoard,  
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  Board
} from './src/components/functions';

type BoardProps = {
  board: Board[][],
  lost: boolean,
  won: boolean,
}

const App = () => {
  const cols = params.getColumnsAmount();
  const rows = params.getRowsAmount();

  let board: BoardProps = {
    board: [],
    lost: false,
    won: false
  };

  function minesAmount(){
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  function onOpenField(row: number, column: number){
    const boardClone = cloneBoard(createMinedBoard(rows, cols, minesAmount()));
    openField(boardClone, row, column);
    const lost = hadExplosion(boardClone);
    const won = wonGame(boardClone)

    if(lost){
      showMines(boardClone)
      Alert.alert('You lost', 'Dumb!!')
    }

    if(won){
      Alert.alert('Congratulations', 'You won!!')
    }

    return board = {
      board: boardClone,
      lost,
      won
    };
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.board}>
        <MineField onOpenField={onOpenField} board={board.board}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})

export default App;
