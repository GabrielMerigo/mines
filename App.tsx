import Field from './src/components/Field';
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Flag from './src/components/Flag';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Flag />
    <Flag bigger />
     {/* <Field opened nearMines={1} />
     <Field opened nearMines={2} />
     <Field opened nearMines={6} />
     <Field opened nearMines={10} />
     <Field opened mined exploded />
     <Field opened mined />
     <Field mined />
     <Field flagged />
     <Field flagged opened /> */}
    </View>
  );
};

export default App;
