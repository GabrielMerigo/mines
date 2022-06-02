import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native';
import { params } from './src/params';

const App = () => {

  return (
    <SafeAreaView>
     <Text>Iniciando o Mines</Text>
     <Text>Tamanha Grade: {params.getColumnsAmount()}x{params.getRowsAmount()}</Text>
    </SafeAreaView>
  );
};

export default App;
