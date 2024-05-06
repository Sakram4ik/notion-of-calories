import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ContextUser} from '../../hook/context';

const Header = () => {
  const [UserInfo] = useContext(ContextUser);
  // const handlerMenu = () => {};
  return (
    <View>
      {UserInfo ? (
        <View style={styles.HeaderContainer}>
          <View style={styles.container}>
            <Text>{UserInfo.name}</Text>
            <View style={styles.buttonProfile} />
          </View>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: '90%',
    backgroundColor: 'red',
  },
  buttonProfile: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
  },
  HeaderContainer: {
    width: '100%',
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
