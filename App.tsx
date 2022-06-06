import React from 'react';
import {
  View
} from 'react-native';
import Flag from './src/components/Flag';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Flag />
      <Flag bigger />
    </View>
  );
};

export default App;
