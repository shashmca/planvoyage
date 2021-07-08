import React, { memo } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

type Props = React.ComponentProps<typeof Input> & { errorText?: string };

const NumberInput = ({ errorText, ...props }: Props) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={theme.colors.secondary}
      keyboardType='numeric'
      underlineColor="transparent"
      mode="flat"
      theme={{roundness: 40}}
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '20%',
    marginVertical: 5,
    display: 'flex',
    justifyContent: 'center',
     alignItems: 'flex-start',
    //  flexDirection: 'row'
    
  },
  input: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
    borderStyle: 'solid',
    borderColor: '#CCF2F4',
    // borderWidth: 1,
    borderBottomWidth: 1,
    fontSize: 16,
    paddingLeft: 30,
   
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
  image: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 25,
    left: 15,
    zIndex: 2
  }
});

export default memo(NumberInput);
