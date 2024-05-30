import {NavigationProp, useNavigation, useRoute, RouteProp, ParamListBase  } from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {navProfile, navHome} from '../../hook/navigation';
import {RootStackParamList} from '../../type/fetch';
import HomePageIcon from '../Image/icons/HomePageIcon';
import CapyBaraPageIcon from '../Image/icons/CaoyBaraPageIcon';
import SettingPageIcon from '../Image/icons/SettingPageIcon';
import colors from '../../components/colors/colors'

const useIsFocused = (screenName: keyof RootStackParamList) => {
  const route = useRoute<RouteProp<RootStackParamList>>();
  return route.name === screenName;
};
export default function NavigationFooter() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [activeButton, setActiveButton] = useState<string>('Home');

  const handlePress = (buttonName: string, navigateTo: () => void) => {
    setActiveButton(buttonName);
    navigateTo();
  };
  
  return (
    <View style = {styles.block}>
      {/* <Button
        title="="
        onPress={() => {
          navProfile(navigation);
        }}
      /> */}
      <TouchableOpacity onPress={() => handlePress('Home', () => navHome(navigation))}
        style={[ activeButton === 'Home' && styles.activeIcon]}>
        <HomePageIcon/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => handlePress('Profile', () => navProfile(navigation))}
        style={[ activeButton === 'Profile' && styles.activeIcon]}>
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
      marginBottom:30
  },
  activeIcon: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: '#5B0888',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    transform: [{ scale: 1.4 }],
    width:37,
    alignItems:"center",
    justifyContent:"center",
    height:37,
  },
  inactiveIcon: {
    borderBottomWidth: 0,
  },
});