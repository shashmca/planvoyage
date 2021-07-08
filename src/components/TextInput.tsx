import React, { memo } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

type Props = React.ComponentProps<typeof Input> & { errorText?: string };

const TextInput = ({ errorText, ...props }: Props) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={theme.colors.secondary}
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
    width: '100%',
    marginVertical: 5,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center'
    
  },
  input: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
    borderRadius: 40,
    borderStyle: 'solid',
    borderColor: '#CCF2F4',
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: 30
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

export default memo(TextInput);
