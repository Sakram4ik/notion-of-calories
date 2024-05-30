
import React, {useState, useEffect,useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../colors/colors';

import {NavigationProp, ParamListBase, useNavigation,RouteProp,useRoute } from '@react-navigation/native';
import { navProduct,} from '../../hook/navigation';

import { RootStackParamList} from '../../type/fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContextUser} from '../../hook/context';


type ProductRouteProp = RouteProp<RootStackParamList, 'Product'>;
const ActionTile_Calories = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const [UserInfo] = useContext(ContextUser);
  const [calories, setCalories] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setCalories(0);
        const token = await AsyncStorage.getItem('userToken');
    console.log(token);
    const currentDate = new Date();
    const currentDay = currentDate.getDate().toString();
        if(UserInfo.breakfastDay == currentDay){
          setCalories(prevCalories => prevCalories + parseInt(UserInfo.breakfastCalories, 10));
          console.log(UserInfo.breakfastDay)
        }
        if(UserInfo.dinnerDay == currentDay){
          setCalories(prevCalories => prevCalories + parseInt(UserInfo.dinnerCalories, 10));
          console.log(UserInfo.dinnerDay )
        }
        if(UserInfo.lunchDay == currentDay){
          setCalories(prevCalories => prevCalories + parseInt(UserInfo.lunchCalories, 10));
          console.log(UserInfo.lunchDay )
        }
      
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 
    return (
      <TouchableOpacity style = {styles.block} onPress={() => navProduct(navigation)}>
        <View style = {styles.mainBlock}>
          <Text style = {styles.text}>Калорій вжито за день:</Text>
          <View style ={styles.blockRow}>
            <Text style = {styles.number}>{calories}</Text>
            <Text style = {styles.textNumber}>Kcal</Text>
          </View>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.back,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  mainBlock: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  blockRow: {
    flexDirection: 'row',
  },
  text: {
    color: colors.primaryText,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 20,
  },
  textNumber: {
    color: colors.primaryText,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 14,
    fontWeight: '500',
    alignSelf: 'center',
  },
  number: {
    color: colors.primaryText,
    fontSize: 35,
    fontWeight: '700',
    marginTop: -7,
    marginRight: 20,
  },
});

export default ActionTile_Calories;
