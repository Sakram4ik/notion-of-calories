export interface IRegister {
  email: string;
  name: string;
  password: string;
}
export interface ILogin {
  email: string;
  password: string;
}
export interface ICode {
  code: string;
}
export interface IToken {
  token: string;
}
import {NavigationProp} from '@react-navigation/native';

export interface RouterProps {
  navigation: NavigationProp<any, any>;
}

export interface IProducts {
  id: string;
  name: string;
  calories: string;
  img: string;
  description: string;
  category: string;
  vitamins: string[];
}
// export type IProducts = {
//   list: product[];
// };
