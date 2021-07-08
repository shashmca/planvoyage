import React, { memo, useState } from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import  GlobalHeader  from '../components/GlobalHeader';
import  GlobalFooter  from '../components/GlobalFooter';
import { Appbar } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const SelectEventType = ({ navigation }: Props) => {
  

//     navigation.navigate('CorporateScreen');
// };

  return(
         <KeyboardAwareScrollView>
         {/* <Background > */}
      <BackButton goBack={() => navigation.navigate('RegisterScreen')}/>
      
      
      <GlobalHeader />
      

      <Text style={styles.title}>Select Event Type</Text>
      
      <View style={{display: 'flex', alignItems:'center',justifyContent: 'center',
            padding: 20,margin: 20}}>
      <View style={{width:'auto', flexDirection:'row'}}>

      <View style={styles.progressbox}>
      <Image style={styles.image} source={require('../assets/social.png')} />
      <Text style={styles.progressboxtext}> Social</Text>
      </View>

     
      <View style={styles.progressbox}>
      <Image style={styles.image} source={require('../assets/corporate.png')}/>
      <Text style={styles.progressboxtext}>Corporate</Text>
      </View>
      
      </View>
      </View>
      
      <GlobalFooter/>
    {/* </Background>  */}
    </KeyboardAwareScrollView>
  )
};

  const styles = StyleSheet.create({
    progressbox:{
      borderColor:"#00c2cb",
      borderWidth:1,
      borderRadius:5,
      width: 100,
      height: 75,
      textAlign:'center',
      margin: 10
      },
      progressboxtext:{
        fontWeight:'bold',
        fontSize:10,
        color: theme,
        textAlignVertical:'bottom',
        position:'absolute',
        left:'30%',
        bottom:10
      },
      image: {
        width: 15,
        height: 15,
        position: 'absolute',
        top: 35,
        left: 15,
        zIndex: 2
      },
      title:{
        fontSize:14,
        margin:'auto'
      }  
  });

export default memo(SelectEventType);
