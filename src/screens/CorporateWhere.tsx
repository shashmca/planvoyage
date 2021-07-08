import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image,Text } from 'react-native';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import { Appbar, ProgressBar, Colors, BottomNavigation } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  GlobalHeader  from '../components/GlobalHeader';
import  GlobalFooter  from '../components/GlobalFooter';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
 

import Icon from 'react-native-vector-icons/FontAwesome';




type Props = {
  navigation: Navigation;
};

const CorporateWhere = ({navigation}: Props) => {
  
  return (
    <KeyboardAwareScrollView style={{minHeight:'100vh'}}>
     {/* <Background >  */}
    
   <GlobalHeader/>
    <View>
    <ProgressBar progress={0.05} color={Colors.blue200} style={styles.progressbar} />
    <Text style={styles.progressbartext}>5%</Text>
    </View>
    <View style={{display: 'flex', alignItems:'center',justifyContent: 'center',
    padding: 20,margin:0}}>
    <View style={{width:'auto', flexDirection:'row'}}>
    <View style={styles.progressbox}>
    <Image style={styles.image} source={require('../assets/when.png')} />
    <Text style={styles.progressboxtext}>WHEN</Text>
    </View>

    <View style={styles.progressbox}>
    <Image style={styles.image} source={require('../assets/program.png')} />
    <Text style={styles.progressboxtext}>BALLPARK</Text>
    </View>

    <View style={styles.progressbox}>
    <Image style={styles.image} source={require('../assets/program.png')} />
    <Text style={styles.progressboxtext}>PROGRAM</Text>
    </View>
    </View>
</View>
  <View>
  <Text style={styles.title}>WHEN, WHERE, AND HOW MANY ?</Text>
  </View>
  <View style={{width:'auto', flexDirection:'row',alignItems:'center',justifyContent: 'center', margin:20}}>
  <Button mode="contained" style={styles.button}>
          When
  </Button>

  <Button mode="contained" style={styles.button}>
          Where
  </Button>

  <Button mode="contained" style={styles.button}>
          How Many
  </Button>
  </View>

{/* <Text style={styles.title}>Dates of Program</Text> */}

<View style= {styles.content}>
      <TextInput
        label="Select Hotel Name (Google search)"
        returnKeyType="done"
        // value={confpassword.value}
        // onChangeText={text => setConfPassword({ value: text, error: '' })}
        // error={!!confpassword.error}
        // errorText={confpassword.error}
        // secureTextEntry
      />
      {/* <Calender/> */}
      </View>
      <View style={{display: 'flex', alignItems:'center',justifyContent: 'center',
        padding: 20,margin:0}}>
      <View style={{width:'auto', flexDirection:'row'}}>
      <Button mode="contained" style={styles.button}>
         BACK
      </Button>
      <Button mode="contained" style={styles.button}>
          NEXT
      </Button>
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
    color: theme.color,
    textAlignVertical:'bottom',
    position:'absolute',
    left:'30%',
    bottom:10
  },

  button: {
    margin: 10,
    maxWidth:100,

  },
  headtitle:{
  fontSize: 14
  },
  title:{
    fontSize:14,
    margin:'auto'
  },
  pr10:{
  paddingRight:10 
  },
  progressbar:{
   height : 20,
  },
  progressbartext:{
   position:'absolute',
  //  top:'-px',
   zIndex:1,
   left :20,
  },
  label: {
    color: theme.colors.primary,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '50%',
    maxWidth: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '90%',
    maxWidth: 420,
    margin:'auto'
    
  },
  image: {
    width: 27,
    height: 27,
    position: 'absolute',
    top: 15,
    left: 35,
    zIndex: 2
  },
  icon: {
    width: 15,
    height: 15,
    position: 'absolute',
    top: 30,
    left: 15,
    zIndex: 2
  }

});
export default memo(CorporateWhere);
