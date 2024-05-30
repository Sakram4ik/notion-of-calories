import React from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../backButton/backButtonImage'
const BackButton = () => {
  const navigation = useNavigation();

const styles=StyleSheet.create({
 BackArrow:{
    position:"absolute",
    top: 20,
    left:20,
 }
})

  return (
    <View style ={styles.BackArrow}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrow/>
    </TouchableOpacity>
    </View>
  );
};

export default BackButton;
