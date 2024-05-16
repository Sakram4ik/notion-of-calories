import {Button, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ContextUser} from '../../hook/context';
import {navLogin, navProduct, navRegister} from '../../hook/navigation';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const {UserInfo} = useContext(ContextUser);

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
          <Button
            title="Go to Register"
            onPress={() => navRegister(navigation)}
          />
          <Button title="Go to Login" onPress={() => navLogin(navigation)} />
        </View>
      )}
    </View>
  );
};

export default Home;
