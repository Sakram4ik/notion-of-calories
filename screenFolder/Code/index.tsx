import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import InputApp from '../../components/Imput';
import {CodeData} from './CodeData';
import {useForm} from 'react-hook-form';
import {ICode} from '../../type/user';
import useSendCode from '../../hook/useSendCode';
import {useCheckAndRegisterMutation} from '../../store/server/server.fetch';
import useGetUserCodeToken from '../../hook/useGetUserCodeToken';
import {IReqCode, Response} from '../../type/fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ContextRefetch} from '../../hook/context';
import colors from '../../components/colors/colors';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
export default function Code({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const CELL_COUNT:number = 4;
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoadingMessage, setisLoadingMessage] = useState('');
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });
  const {
    handleSubmit,
    control,

    formState: {},
  } = useForm<ICode>();

  useSendCode();

  const sendData = useGetUserCodeToken();
  const [checkAndRegister] = useCheckAndRegisterMutation();
  const [refetch, setRefetch] = useContext(ContextRefetch);
  const handlerCode = async (value: ICode) => {
    const send: IReqCode = {
      code: value.code,
      token: sendData.token,
    };
    setisLoadingMessage('Load');
    const code = (await checkAndRegister(send)) as Response<any>;

    if (code.data) {
      console.log('aaaaa');
      await AsyncStorage.setItem('userToken', code.data.token);
      setisLoadingMessage('');
      setRefetch(refetch + 1);
      navigation.navigate('Main', {screen: 'Home'});
    }
    if (code.error) {
      setisLoadingMessage('');
      setErrorMessage(code.error.data.message);
    }
  };

const styles = StyleSheet.create({
  block:{
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent:'center'
  },
  button:{
    color:colors.inputText,
    backgroundColor:colors.inputs,
    marginHorizontal:'13%',
    borderRadius:8,
    paddingVertical:12,
    marginVertical:1
  },
  buttonText:{
    textAlign:"center",
    color:colors.inputText,
    fontFamily:"RussoOne-Regular"
  },
  root: { 
    flex: 1, 
    padding: 20,
  },
  title: { 
    textAlign: 'center', 
    fontSize: 30 
  },
  codeFieldRoot: {
     marginTop: 20,
     justifyContent:"center",
  },
  cell: {
    width: 40,
    height: 60,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 5,
    borderColor: '#5B0888',
    textAlign: 'center',
    borderRadius:9,
    marginHorizontal:10,
    color:"#FFD1E3",
    paddingTop:"2.5%"
  },
  focusCell: { borderColor: '#392467' },
  mainText:{
    color:colors.primaryText,
    fontSize:28,
    fontWeight:"400",
    lineHeight:30,
    fontFamily:"RussoOne-Regular",
    marginHorizontal:'13%',
    textAlign:'center',
    marginBottom:20

  },
  mainImg:{
    alignSelf:"center",
    marginBottom:60
  }
})

  return (
    <View style = {styles.block}>
      <Image style ={styles.mainImg} source={require('../../components/Image/LoaderCapybara.png')}></Image>
      <Text style = {styles.mainText}>Введіть код підтвердження, який прийшов вам на пошту</Text>
      <InputApp control={control} name={CodeData.name} rules={CodeData.rules} />
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Text>{isLoadingMessage}</Text>
      <Text>{errorMessage}</Text>
      <View style ={styles.button}>
            <TouchableOpacity onPress={handleSubmit(handlerCode)}>
              <Text style ={styles.buttonText}>Lets Go</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
}
