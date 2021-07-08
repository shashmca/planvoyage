import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image,Text } from 'react-native';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import { Appbar, ProgressBar, Colors, BottomNavigation } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  Footer  from './GlobalFooter';
import  Header  from './Header';
import Button from './Button';
import TextInput from './TextInput';

import Background from './Background';
import Icon from 'react-native-vector-icons/FontAwesome';
type Props = {
  navigation: Navigation;
};  

const GlobalFooter = ({ navigation }: Props) => {

  return (
    <View style={styles.bottom}>
      <Appbar >
        <Appbar.Content 
            title={<Text style={{color: "#00c2cb", fontSize: 14, display:'inline'}}>CORPORATE</Text>}
            style={{marginLeft:10,padding:0,position:'absolute'}}
        />
            <Appbar.Content 
            title={<Text style={{color: "white", fontSize: 14}}>- When, Where and How many?</Text>}
            style={{marginLeft:90}}
        />
        
        {/* <Image style={styles.image} source={require('../assets/home.png')} />
        <Image style={styles.image} source={require('../assets/search.png')} />
        <Image style={styles.image} source={require('../assets/notification.png')} />
        <Image style={styles.image} source={require('../assets/profile.png')} /> */}

      </Appbar>
    </View>
      )
    };
      
    const styles = StyleSheet.create({
      
      pr10: {
        paddingRight: 10 
      },
      bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom:-100,
        color:"ffffff"
      },
      image: {
        width: 15,
        height: 15,
        position: 'absolute',
        top: 35,
        left: 15,
        zIndex: 2
      }
    });
    export default memo(GlobalFooter);
    