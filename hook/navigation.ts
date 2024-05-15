import {NavigationProp, ParamListBase} from '@react-navigation/native';

export const navProduct = (navigation: NavigationProp<ParamListBase>) => {
  console.log('FFF');
  navigation.navigate('Main', {screen: 'Products'});
};
