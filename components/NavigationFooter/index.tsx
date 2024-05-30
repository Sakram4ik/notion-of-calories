import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {navProfile, navHome} from '../../hook/navigation';
import {RootStackParamList} from '../../type/fetch';
import HomePageIcon from '../Image/icons/HomePageIcon';
import CapyBaraPageIcon from '../Image/icons/CaoyBaraPageIcon';
import SettingPageIcon from '../Image/icons/SettingPageIcon';
import colors from '../../components/colors/colors'

export default function NavigationFooter() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style = {styles.block}>
      {/* <Button
        title="="
        onPress={() => {
          navProfile(navigation);
        }}
      /> */}
      <TouchableOpacity onPress={() =>{navHome(navigation)}}>
        <HomePageIcon/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{navProfile(navigation)}}>

        <CapyBaraPageIcon/>
      </TouchableOpacity>
      <TouchableOpacity>
        <SettingPageIcon/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  block:{
    flexDirection:"row",
    paddingVertical:16,
    backgroundColor:colors.footer,
    borderRadius:12,
    marginHorizontal:'10%',
    justifyContent:"space-around",
    marginBottom:30,
    marginTop:15
  }
})
