import {useEffect} from 'react';
import {useSendEmailMutation} from '../store/server/server.fetch';
import {RegisterResponse} from '../type/fetch';
import useGetUserCodeToken from './useGetUserCodeToken';

export default function () {
  const [sendEmail] = useSendEmailMutation();
  const sendData = useGetUserCodeToken();
  useEffect(() => {
    const getU = async () => {
      if (sendData.token.length > 0) {
        const {data}: RegisterResponse = await sendEmail(sendData).unwrap();
        console.log(data);
        return data;
      }
    };
    getU();
  }, [sendData, sendEmail]);
}
