import AsyncStorage from '@react-native-async-storage/async-storage';

import {IToken} from '../type/user';
import {useEffect, useState} from 'react';
import {useGetUserMutation} from '../store/server/server.fetch';

export default function () {
  const [userData, setUserData] = useState<IToken>({token: ''});
  const [getUser] = useGetUserMutation();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        const userData = {token};
        setUserData(userData);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    const getU = async () => {
      const {data} = await getUser(userData).unwrap();
      console.log(data);
      return data;
    };
    getU();
  }, [userData, getUser]);
}
