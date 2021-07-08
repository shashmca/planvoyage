import React, { memo } from 'react';
import { StyleSheet, View, Image,Text } from 'react-native';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
type Props = {
  navigation: Navigation;
};  

const GlobalFooter = ({ navigation }: Props) => {

  return (
    <View >
      <Appbar style={styles.bottom}>
        <Appbar.Content 
            title={<Image style={styles.image} source={require('../assets/home.png')} />}
        />
            <Appbar.Content 
            title={<Image style={styles.image} source={require('../assets/search.png')} />}
        />
        <Appbar.Content 
            title={<Image style={styles.image} source={require('../assets/notification.png')} />}
        />
        <Appbar.Content 
            title={<Image style={styles.image} source={require('../assets/profile.png')} />}
        />
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
        backgroundColor:"#fff",
        minHeight: 50,
        borderTopColor: theme.colors.primary,
        borderTopWidth: 2,
        
      },
      image: {
        width: 25,
        height: 25,
        zIndex: 2,
        padding: '10px 5px'
      }
    });
    export default memo(GlobalFooter);
    