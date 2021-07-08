import React, {useState} from 'react';
import { memo } from 'react';
import {View, Button, Platform} from 'react-native';
import RangeSlider from 'react-native-range-slider'

export const RangeSlider = () => {

    return (

    <View style={{flex: 1, flexDirection: 'row'}}>
  <RangeSlider
    minValue={0}
    maxValue={100}
    tintColor={'#da0f22'}
    handleBorderWidth={1}
    handleBorderColor="#454d55"
    selectedMinimum={20}
    selectedMaximum={40}
    style={{ flex: 1, height: 70, padding: 10, backgroundColor: '#ddd' }}
    onChange={ (data)=>{ console.log(data);} }
  />
</View>
    );
};
export default memo(RangeSlider);