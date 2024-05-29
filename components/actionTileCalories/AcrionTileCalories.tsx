import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../colors/colors';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {navProduct} from '../../hook/navigation';

const ActionTile_Calories = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  return (
    <TouchableOpacity
      style={styles.block}
      onPress={() => navProduct(navigation)}>
      <View style={styles.mainBlock}>
        <Text style={styles.text}>Калорій вжито за день:</Text>
        <View style={styles.blockRow}>
          <Text style={styles.number}>2 100</Text>
          <Text style={styles.textNumber}>Kcal</Text>
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
