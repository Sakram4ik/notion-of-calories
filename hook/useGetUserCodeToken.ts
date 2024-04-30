import {useEffect, useState} from 'react';
import {IToken} from '../type/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function () {
  const [sendData, setSendData] = useState<IToken>({token: ''});
  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('tokenCode');
      if (token) {
        const userData = {token};
        setSendData(userData);
      }
    };
    fetchToken();
  }, []);
  return sendData;
}
