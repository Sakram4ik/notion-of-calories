import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

export const navProduct = (navigation: NavigationProp<ParamListBase>) => {
  navigation.navigate('Main', {screen: 'Products'});
};
export const navHome = (navigation: NavigationProp<ParamListBase>) => {
  navigation.navigate('Main', {screen: 'Home'});
};
export const navRegister = (navigation: NavigationProp<ParamListBase>) => {
  navigation.navigate('Register');
};
export const navLogin = (navigation: NavigationProp<ParamListBase>) => {
  navigation.navigate('Login');
};
export const navProfile = async (navigation: NavigationProp<ParamListBase>) => {
  const token = await AsyncStorage.getItem('userToken');
  navigation.navigate('Profile', {token});
};
