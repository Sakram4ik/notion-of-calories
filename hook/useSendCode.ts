import {useEffect} from 'react';
import {useSendEmailMutation} from '../store/server/server.fetch';
import {Response} from '../type/fetch';
import useGetUserCodeToken from './useGetUserCodeToken';

export default function () {
  const [sendEmail] = useSendEmailMutation();
  const sendData = useGetUserCodeToken();
  useEffect(() => {
    const getU = async () => {
      if (sendData.token.length > 0) {
        const data = (await sendEmail(sendData)) as Response;
        console.log(data);
        return data.data;
      }
    };
    getU();
  }, [sendData, sendEmail]);
}
