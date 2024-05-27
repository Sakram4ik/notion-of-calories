import {Button, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ContextUser} from '../../hook/context';
import {navLogin, navProduct, navRegister} from '../../hook/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const [UserInfo, setUserInfo] = useContext(ContextUser);
  const handlerGetOut = async () => {
    console.log('aaaaaaaaaaa');
    console.log(UserInfo);
    await AsyncStorage.removeItem('token');
    setUserInfo('');
  };
  return (
    <View>
      {!UserInfo ? (
        <View>
          <View>
            <Button
              title="Go to Register"
              onPress={() => navRegister(navigation)}
            />
            <Button title="Go to Login" onPress={() => navLogin(navigation)} />
          </View>
        </View>
      ) : (
        <View>
          <Button title="Go out" onPress={() => handlerGetOut()} />
          <Button
            title="product"
            onPress={() => {
              navProduct(navigation);
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Home;
