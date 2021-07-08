import React, { useState } from 'react';
import { memo } from 'react';
import { View, Button, Platform, StyleSheet, Text } from 'react-native';
import RangeSlider, { Slider } from 'react-native-range-slider-expo';

export const CustomRangeSlider = () => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <RangeSlider
          min={5}
          max={25}
          fromValueOnChange={value => setFromValue(value)}
          toValueOnChange={value => setToValue(value)}
          initialFromValue={11}
        />
        <Text>from value: {fromValue}</Text>
        <Text>to value: {toValue}</Text>
      </View>
      <View>
        <Slider
          min={0}
          max={40}
          step={4}
          valueOnChange={value => setValue(value)}
          initialValue={12}
          knobColor="red"
          valueLabelsBackgroundColor="black"
          inRangeBarColor="purple"
          outOfRangeBarColor="orange"
        />
        <Text>value: {value}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center'
    
  }
})
export default memo(CustomRangeSlider);
