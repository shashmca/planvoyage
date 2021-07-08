import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import NumberInput from '../components/NumberInput';
import Paragraph from '../components/Paragraph';
import { theme } from '../core/theme';
import Button from '../components/Button';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};


const Onetimepassword = ({ navigation }: Props) => {
//   const [number, setNumber] = useState({ value: '', error: '' });

//   const _onSendPressed = () => {
//     const emailError = emailValidator(email.value);

//     if (emailError) {
//       setEmail({ ...email, error: emailError });
//       return;
//     }

//     navigation.navigate('Onetimepassword');
//   };

  return (
    <KeyboardAwareScrollView
      // style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
    {/* <Background> */}
      <BackButton goBack={() => navigation.navigate('Onetimepassword')} />

      <Logo />

      <Header>Enter OTP</Header>
      <Paragraph>Please type the verification code sent to +91 9999999999</Paragraph>
      <View style={styles.container2}>
      <NumberInput
        label=""
        returnKeyType="done"
        value=""
        onChangeText={number => setNumber({ value:number, error: '' })}
        // error={!!number.error}
        // errornumber={number.error}
        autoCapitalize="none"
        autoCompleteType="cc-number"
        textContentType="none"
        keyboardType="numeric"/>

<NumberInput
        label=""
        returnKeyType="done"
        value=""
        // onChangeText={text => setEmail({ value: text, error: '' })}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="cc-number"
        textContentType="none"
        keyboardType="numeric"/>

<NumberInput
        label=""
        returnKeyType="done"
        value=""
        // onChangeText={text => setEmail({ value: text, error: '' })}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="cc-number"
        textContentType="none"
        keyboardType="numeric"/>

      <NumberInput
        label=""
        returnKeyType="done"
        value=""
        // onChangeText={text => setEmail({ value: text, error: '' })}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="cc-number"
        textContentType="none"
        keyboardType="numeric"/>
</View>
      <Button mode="contained" style={styles.button}>
        Submit 
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Onetimepassword')}
      >
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
      {/* <View style={styles.row}>
        <Text style={styles.label}>Did’t get code </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>RESEND</Text>
        </TouchableOpacity>
      </View> */}
    {/* </Background> */}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
  content: {
    width: '100%',
    maxWidth: 340
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    display: 'flex',
    justifyContent: 'center',
     alignItems: 'flex-start',
     flexDirection: 'row',
     width : '50%',
  }
});

export default memo(Onetimepassword);