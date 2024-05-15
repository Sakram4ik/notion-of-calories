import {Button, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ContextUser} from '../../hook/context';
import {navProduct} from '../../hook/navigation';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const handler = () => {
    navigation.navigate('Register');
  };
  const handlerLogin = () => {
    navigation.navigate('Login');
  };
  const [UserInfo] = useContext(ContextUser);

  return (
    <View>
      {UserInfo ? (
        <View>
          <View>
            <Button
              title="product"
              onPress={() => {
                navProduct(navigation);
              }}
            />
          </View>
        </View>
      ) : (
        <View>
          <Button title="Go to Register" onPress={() => handler()} />
          <Button title="Go to Login" onPress={() => handlerLogin()} />
        </View>
      )}
    </View>
  );
};

export default Home;
