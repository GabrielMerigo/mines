import React, { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Flag from './src/components/Flag';
import MineField from './src/components/MineField';
import { createMinedBoard } from './src/components/functions'
import { params } from './src/params';

const App = () => {
  const cols = params.getColumnsAmount();
  const rows = params.getRowsAmount();

  const [{ board }, setBoard] = useState({
    board: createMinedBoard(rows, cols, minesAmount())
  })

  function minesAmount(){
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.board}>
        <MineField board={board}/>
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
