import React, { useState, memo } from 'react';
import { View, Button, Platform, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextInput from '../components/TextInput';

export const Calender = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View style={styles.content}>
        <Image style={styles.icon} source={require('../assets/confirm.png')} />
        {/* <TouchableOpacity onPress={showDatepicker}> */}
          <TextInput
            label="Select the Programe date"
            returnKeyType="done"
            value={date.toDateString()}
            // onChangeText={text => setConfPassword({ value: text, error: '' })}
            // error={!!confpassword.error}
            // errorText={confpassword.error}
            // secureTextEntry
            onTouchStart={showDatepicker}
            
          />
        {/* </TouchableOpacity> */}
      </View>
      {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '90%',
    maxWidth: 420,
    margin: 'auto',
  },
  image: {
    width: 27,
    height: 27,
    position: 'absolute',
    top: 15,
    left: 35,
    zIndex: 2,
  },
  icon: {
    width: 15,
    height: 15,
    position: 'absolute',
    top: 30,
    left: 15,
    zIndex: 2,
  },
});

export default memo(Calender);
