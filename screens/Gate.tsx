import * as React from 'react';
import {Text, View} from 'react-native';
import GateButton from '../components/GateButton';

const Gate: React.FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <GateButton />
    </View>
  );
};

export default Gate;
