import React, {useState, useEffect} from 'react';
import {Controller} from 'react-hook-form';
import {Text, TextInput,StyleSheet, } from 'react-native';
import colors from '../../components/colors/colors'
export default function InputApp({control, rules, name}: any) {

  const styles = StyleSheet.create({
    inputs:{
      color:colors.inputText,
      backgroundColor:colors.inputs,
      fontSize: 12,
      fontWeight:"600",
      lineHeight:15,
      marginHorizontal:"13%",
      borderRadius:8,
      marginTop:20,
      paddingLeft: 15
    }

  })

  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur,name}, fieldState: {error}}) => (
          <>
            <TextInput style ={styles.inputs}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={name}
            />

            {error && <Text>{error.message || 'error'}</Text>}
          </>
        )}
      />
    </>
    
  );
}
