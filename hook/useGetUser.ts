import AsyncStorage from '@react-native-async-storage/async-storage';

import {IToken} from '../type/user';
import {useEffect, useState} from 'react';
import {useGetUserMutation} from '../store/server/server.fetch';
interface RegisterResponse {
  data?: any;
  error?: any;
}
export default function () {
  const [userData, setUserData] = useState<IToken>({token: ''});
  const [getUser] = useGetUserMutation();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('userToken'); // Получение токена из AsyncStorage
      if (token) {
        // Если токен найден, отправляем запрос с токеном
        const userData = {token}; // Предположим, что токен отправляется как часть данных пользователя
        setUserData(userData); // Устанавливаем данные пользователя для выполнения запроса
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    const getU = async () => {
      const {data}: RegisterResponse = await getUser(userData);
      console.log(data);
      return data;
    };
    getU();
  }, [userData, getUser]);
}
