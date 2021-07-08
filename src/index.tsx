import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  Onetimepassword,
  ChangePasswordScreen,
  SelectEventType,
  CorporateWhen,
  CorporateWhere,
  CorporateHowmany
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    Onetimepassword,
    ChangePasswordScreen,
    SelectEventType,
    CorporateWhen,
    CorporateWhere,
    CorporateHowmany
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
