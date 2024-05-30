import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

import colors from '../colors/colors'
interface TogglePageProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
const TogglePage: React.FC<TogglePageProps> = ({page, setPage}) => {
  const handlerPlus = () => {
    setPage(page + 1);
  };
  const handlerMinus = () => {
    setPage(page - 1);
  };
  return (
    <View style={{ backgroundColor: colors.primary, marginBottom: 10, height:'15%' }}>
    {page > 1 && (
      <TouchableOpacity style={styles.button} onPress={handlerMinus}>
        <Text style={styles.buttonText}>minus</Text>
      </TouchableOpacity>
    )}
    {page < 20 && (
      <TouchableOpacity style={styles.button} onPress={handlerPlus}>
        <Text style={styles.buttonText}>more info</Text>
      </TouchableOpacity>
    )}
  </View>
  );
};
export default TogglePage;
const styles = StyleSheet.create({
  button: {
    color: colors.inputText,
    backgroundColor: colors.inputs,
    marginHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 10,
    marginVertical: 5,
    
  },
  buttonText:{
    textAlign: 'center',
    color: colors.inputText,
    fontFamily: 'RussoOne-Regular',
  },
});
