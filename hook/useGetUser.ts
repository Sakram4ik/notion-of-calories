import AsyncStorage from '@react-native-async-storage/async-storage';

import {IToken} from '../type/user';
import {useEffect, useState} from 'react';
import {useGetUserMutation} from '../store/server/server.fetch';
import {Response} from '../type/fetch';

export default function () {
  const [userData, setUserData] = useState<IToken>({token: ''});
  const [getUser] = useGetUserMutation();
  const [UserInfo, setUserInfo] = useState<any>('');

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        setUserData({token: token});
      }
    };
    console.log('aaa');
    fetchToken();
  }, []);

  useEffect(() => {
    const getU = async () => {
      console.log(userData);
      const user = (await getUser(userData)) as Response<any>;
      if (user.data) {
        console.log(user.data);
        setUserInfo(user.data);
      }
    };
    getU();
  }, [userData, getUser]);
  return [UserInfo, setUserInfo];
}
