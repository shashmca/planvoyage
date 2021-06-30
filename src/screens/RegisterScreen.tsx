import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import {
  emailValidator,
  passwordValidator,
  confpasswordValidator,
  nameValidator,
  mobilenumberValidator,
  companynameValidator,
} from '../core/utils';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [mobilenumber, setMobileNumber] = useState({ value: '', error: '' });
  const [companyname, setCompanyName] = useState({ value: '', error: '' });

  const [password, setPassword] = useState({ value: '', error: '' });
  const [confpassword, setConfPassword] = useState({ value: '', error: '' });

  const _onSignUpPressed = () => {
    // const emailError email.value);
    const passwordError = passwordValidator(password.value);
    const confpasswordError = confpasswordValidator(password.value, confpassword.value);

    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const mobilenumber = mobilenumberValidator(mobilenumber.value);
    const companyname = companynameValidator(companyname.value);
    if (emailError || passwordError || confpasswordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setMobileNumber({ ...mobilenumber, error: mobilenumberError });
      setCompanyName({ ...companyname, error: companynameError });
      setPassword({ ...password, error: passwordError });
      setConfPassword({ ...confpassword, error: confpasswordError})
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
    {/* <Background> */}
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Sign Up</Header>
      
      <View style= {styles.content}>
      <Image style={styles.image} source={require('../assets/user.png')} />
      <TextInput
        label="Enter Your Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      </View>

      <View style= {styles.content}>
      <Image style={styles.image} source={require('../assets/email.png')} />
      <TextInput
        label="Email Address"
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
      <Image style={styles.image} source={require('../assets/phone.png')} />
      <TextInput
        label="Mobile No."
        returnKeyType="next"
        value={mobilenumber.value}
        onChangeText={text => setMobileNumber({ value: text, error: '' })}
        error={!!mobilenumber.error}
        errorText={mobilenumber.error}
      />
      </View>
      
      <View style= {styles.content}>
      <Image style={styles.image} source={require('../assets/company.png')} />
      <TextInput
        label="Company Name (If Any)"
        returnKeyType="next"
        value={companyname.value}
        onChangeText={text => setCompanyName({ value: text, error: '' })}
        error={!!companyname.error}
        errorText={companyname.error}
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
      />
      </View>

      <View style= {styles.content}>
      <Image style={styles.image} source={require('../assets/confirm.png')} />
      <TextInput
        label="Re-Enter Password"
        returnKeyType="done"
        value={confpassword.value}
        onChangeText={text => setConfPassword({ value: text, error: '' })}
        error={!!confpassword.error}
        errorText={confpassword.error}
        secureTextEntry
      />
      </View>

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </View>
    {/* </Background> */}
     </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.primary,
  },
  button: {
    marginTop: 24,
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
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});

export default memo(RegisterScreen);
