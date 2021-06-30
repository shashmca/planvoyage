import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { nameValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = nameValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <KeyboardAwareScrollView
      // style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
    {/* // <Background> */}
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Sign In</Header>
      <View style= {styles.content}>
      <Image style={styles.image} source={require('../assets/user.png')} />
      <TextInput
        label="User Name/Mobile"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      </View>
      

      <View style= {styles.content}>
      <Image style={styles.image} source={require('../assets/lock.png')} />
      <TextInput
        label="Enter Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        // style={styles.textBox}
      />
      </View>

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.lebelForgot}>Forgot password ?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Sign in
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t you have account </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>sign up</Text>
        </TouchableOpacity>
      </View>
    {/* // </Background> */}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop : 25,
  },
  lebelForgot: {
    color: theme.colors.secondary,
  },
  label: {
    color: theme.colors.primary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
  textBox: {
    borderRadius: 24
  },
  content: {
    width: '100%',
    maxWidth: 420
  },
  image: {
    width: 15,
    height: 15,
    position: 'absolute',
    top: 35,
    left: 15,
    zIndex: 2
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
});

export default memo(LoginScreen);
