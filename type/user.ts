export interface IRegistr {
  email: string;
  name: string;
  password: string;
}

import {NavigationProp} from '@react-navigation/native';

export interface RouterProps {
  navigation: NavigationProp<any, any>;
}
