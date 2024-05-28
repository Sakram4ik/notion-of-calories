import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../colors/colors'

interface ButtonProps{
  onPress: () => void;
}

const LoginButton:React.FC<ButtonProps> = ({onPress}) =>{

    const styles = StyleSheet.create({
        button:{
            color:colors.inputText,
            backgroundColor:colors.inputs,
            marginHorizontal:'13%',
            borderRadius:8,
            paddingVertical:12
          },
          buttonText:{
            textAlign:"center",
            color:colors.inputText,
            fontFamily:"RussoOne-Regular"
          },

    })
return (
<View style ={styles.button}>
      <TouchableOpacity onPress ={onPress}>
        <Text style ={styles.buttonText}>GO IT</Text>
        
      </TouchableOpacity>
    </View>

)

}

export default LoginButton;