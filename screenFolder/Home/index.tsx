
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useContext} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ContextUser} from '../../hook/context';
import colors from '../../components/colors/colors';

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
    <View style={styles.block}>
      {UserInfo ? (
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

          <Image
            style={styles.mainImg}
            source={require('../../components/Image/mainCapybara.png')}
          />
          <Text style={styles.mainText}>Вітаємо!</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handler()}>
              <Text style={styles.buttonText}>Go to Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handlerLogin()}>
              <Text style={styles.buttonText}>Go to login</Text>
            </TouchableOpacity>
          </View>

        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    color: colors.inputText,
    backgroundColor: colors.inputs,
    marginHorizontal: '13%',
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.inputText,
    fontFamily: 'RussoOne-Regular',
  },
  mainText: {
    color: colors.primaryText,
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 30,
    fontFamily: 'RussoOne-Regular',
    marginHorizontal: '13%',
    textAlign: 'center',
    marginBottom: 20,
  },
  mainImg: {
    alignSelf: 'center',
    marginBottom: 60,
  },
});
export default Home;
