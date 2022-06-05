import Field from './src/components/Field';
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { params } from './src/params';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Field opened nearMines={1} />
     <Field opened nearMines={2} />
     <Field opened nearMines={6} />
     <Field opened nearMines={10} />
     <Field />
     <Field opened mined exploded />
     <Field opened mined />
     <Field mined />
    </View>
  );
};

export default App;
