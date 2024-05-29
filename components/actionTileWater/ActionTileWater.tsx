import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../colors/colors';
import WaterWaves from '../Image/icons/WaterWaves'
import PlusCupIcon from '../Image/icons/PlusCupIcon';
const ActionTile_Water = () => {
  
    return (
      <TouchableOpacity style = {styles.block}>
        <View style ={styles.blockRow}>
          <Text style = {styles.text}>Стаканів води {'\n'} за день:</Text>
          <WaterWaves/>
        </View>
        <View style ={styles.blockRowSecond}>
            <Text style = {styles.number}>4</Text>
            <PlusCupIcon/>
        </View>
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
  blockRowSecond:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginVertical:20
  },
  text:{
    color: colors.primaryText,
    fontFamily: 'Ubuntu-Medium',
    fontSize:14,
    fontWeight:"500",
    marginRight:40

  },
  number:{
    color: colors.primaryText,
    fontSize:35,
    fontWeight:"700",
    marginTop:-7
  }
})

export default ActionTile_Water;
