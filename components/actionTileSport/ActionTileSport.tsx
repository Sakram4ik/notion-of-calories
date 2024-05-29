import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../colors/colors';
import TrainingRun from '../Image/icons/TrainingRun';
const ActionTile_Sport = () => {
  
    return (
      <TouchableOpacity style = {styles.block}>
        <View style = {styles.mainBlock}>
          <Text style = {styles.text}>Тренування о 19:00</Text>
          <TrainingRun/>
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  block:{
    backgroundColor:"#5B0888",
    borderRadius:20,
    padding:20,
    alignItems:"center",
  },
  mainBlock:{
    alignItems:"center",
    paddingBottom:20
  },
  text:{
    color: colors.primaryText,
    fontFamily: 'Ubuntu-Medium',
    fontSize:14,
    fontWeight:"500",
    marginBottom:20

  },
})

export default ActionTile_Sport;
