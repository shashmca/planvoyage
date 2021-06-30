import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header></Header>

    <Paragraph>
      
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Sign in
    </Button>
    <Button mode="contained" onPress={() => navigation.navigate('RegisterScreen')}>
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
