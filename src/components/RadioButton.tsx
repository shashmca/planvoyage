import  React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioButton = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
    </View>
  );
};

export default RadioButton;