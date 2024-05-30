import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StepsProgress from './StepsProgress';
import colors from '../colors/colors';
import FootsIcon from '../Image/icons/footsIcon'
const ActionTile_Walking = () => {

    const currentSteps = 3300; // Поточна кількість кроків
    const maxSteps = 10000; // Бажана кількість кроків
  
    return (
      <TouchableOpacity style = {styles.block}>
        <View style ={styles.blockRow}>
          <Text style = {styles.text}>Прогулянка</Text>
          <FootsIcon/>
        </View>
        {/* <StepsProgress currentSteps={currentSteps} maxSteps={maxSteps} /> */}
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  block:{
    backgroundColor:colors.back,
    borderRadius:20,
    padding:15
  },
  blockRow:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  text:{
    color: colors.primaryText,
    fontFamily: 'Ubuntu-Medium',
    fontSize:14,
    fontWeight:"500",
    marginRight:40

  },
})

export default ActionTile_Walking;
