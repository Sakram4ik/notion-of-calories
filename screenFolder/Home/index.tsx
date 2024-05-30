import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useContext} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ContextUser} from '../../hook/context';
import colors from '../../components/colors/colors';

import {format} from 'date-fns';
import {uk} from 'date-fns/locale';

import {navLogin, navProduct, navRegister} from '../../hook/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionTile_Walking from '../../components/actionTileWalking/actionTile_Walking';
import ActionTile_Water from '../../components/actionTileWater/ActionTileWater';
import ActionTile_Sport from '../../components/actionTileSport/ActionTileSport';
import ActionTile_Calories from '../../components/actionTileCalories/AcrionTileCalories';
import TrainingCalendarIcon from '../../components/Image/icons/TrainingCalendarIcon';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const [UserInfo, setUserInfo] = useContext(ContextUser);
  const handlerGetOut = async () => {
    console.log('aaaaaaaaaaa');
    console.log(UserInfo);
    await AsyncStorage.removeItem('token');
    setUserInfo('');
  };

  const userName = UserInfo.name;
  const currentDate = new Date(); // Отримуємо поточну дату
  const formattedDate = format(currentDate, 'd MMMM, EEEE', {locale: uk});

  return (
    <View style={styles.Mainblock}>
      {UserInfo ? (
        <>
          <View style={styles.header}>
            <View style={styles.blockHeader}>
              <Text style={styles.mainText}>Привіт, {userName}!</Text>
              <Text style={styles.dateText}>{formattedDate}</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../components/Image/ProfileIcon.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.blockRow}>
            <ActionTile_Walking />
            <ActionTile_Water />
          </View>
          <View style={styles.blockRow}>
            <ActionTile_Sport />
            <ActionTile_Calories navigation={navigation} />
          </View>
          <TouchableOpacity style={styles.calendarBlock}>
            <Text style={styles.calendarText}>Календар тренувань</Text>
            <TrainingCalendarIcon />
          </TouchableOpacity>
        </>
      ) : (
        <View>
          <Image
            style={styles.mainImg}
            source={require('../../components/Image/mainCapybara.png')}
          />
          <Text style={styles.mainText}>Вітаємо!</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navRegister(navigation)}>
              <Text style={styles.buttonText}>Go to Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navLogin(navigation)}>
              <Text style={styles.buttonText}>Go to login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  blockHeader: {
    flexDirection: 'column',
  },
  Mainblock: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  block: {
    flex: 1,
    justifyContent: 'center',
  },
  blockRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    color: colors.inputText,
    backgroundColor: colors.inputs,
    marginHorizontal: 20,
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
    textAlign: 'center',
    marginBottom: 2,
  },
  dateText: {
    fontSize: 16,
    color: colors.primaryText,
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'left',
  },
  mainImg: {
    alignSelf: 'center',
    marginBottom: 60,
  },
  calendarBlock:{
    flexDirection:"row",
    backgroundColor:"#A367B1",
    borderRadius:10,
    padding:20,
    marginHorizontal:20,
    justifyContent:"space-between",
    marginTop:50
  },
  calendarText:{
    color:'#FFFFFF',
    fontSize:16,
    fontWeight:'500',
    fontFamily: 'RussoOne-Regular',
  }
});
export default Home;
