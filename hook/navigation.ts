import {NavigationProp, ParamListBase} from '@react-navigation/native';

export const navProduct = (navigation: NavigationProp<ParamListBase>) => {
  navigation.navigate('Main', {screen: 'Products'});
};
export const navRegister = (navigation: NavigationProp<ParamListBase>) => {
  navigation.navigate('Register');
};
export const navLogin = (navigation: NavigationProp<ParamListBase>) => {
  navigation.navigate('Login');
};
