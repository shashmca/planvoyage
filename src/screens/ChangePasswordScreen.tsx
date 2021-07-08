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
import { passwordValidator } from '../core/utils';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const ChangePasswordScreen = ({ navigation }: Props) => {
  const [password, setPassword] = useState({ value: '', error: '' });
  const [confnewpassword, setConfnewpassword] = useState({ value: '', error: '' });


  const _onLoginPressed = () => {
    const passwordError = passwordValidator(password.value);
    const confnewpasswordError = ConfnewpasswordValidator(confnewpassword.value);


    if (passwordError || confnewpasswordError) {
      setPassword({ ...password, error: passwordError });
      setConfnewpassword({ ...confnewpassword, error: confnewpasswordError });
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <KeyboardAwareScrollView
      // style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
    {/* // <Background> */}
      <BackButton goBack={() => navigation.navigate('RegisterScreen')} />

      <Logo />

      <Header>Change Password</Header>
      <View style= {styles.content}>
      <Image style={styles.image} source={require('../assets/user.png')} />
      <TextInput
        label="Enter New Password"
        returnKeyType="next"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        keyboardType="email-address"
      />
      </View>
      

      <View style= {styles.content}>
      <Image style={styles.image} source={require('../assets/lock.png')} />
      <TextInput
        label="Confirm New Password"
        returnKeyType="done"
        value={confnewpassword.value}
        onChangeText={text => setConfnewpassword({ value: text, error: '' })}
        error={!!confnewpassword.error}
        errorText={confnewpassword.error}
        secureTextEntry
        // style={styles.textBox}
      />
      </View>

      

      <Button mode="contained" onPress={_onLoginPressed}>
        Reset
      </Button>

     <View style={styles.row}>
        
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          
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

export default memo(ChangePasswordScreen);
