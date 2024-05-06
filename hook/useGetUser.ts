import AsyncStorage from '@react-native-async-storage/async-storage';

import {useEffect, useState} from 'react';
import {useGetUserMutation} from '../store/server/server.fetch';
import {Response} from '../type/fetch';

export default function () {
  const [getUser] = useGetUserMutation();
  const [UserInfo, setUserInfo] = useState<any>('');

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        const user = (await getUser({token: token})) as Response<any>;
        if (user.data) {
          console.log(user.data);
          setUserInfo(user.data);
        }
      }
    };
    console.log('aaa');
    fetchToken();
  }, [getUser]);

  return [UserInfo, setUserInfo];
}
