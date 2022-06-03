import Field from './src/components/Field';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native';
import { params } from './src/params';


const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
     <Field />
     <Text>Iniciando o Mines</Text>
     <Text>Tamanha Grade: {params.getColumnsAmount()}x{params.getRowsAmount()}</Text>
    </View>
  );
};

export default App;
