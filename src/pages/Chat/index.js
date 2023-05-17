import { useEffect } from 'react';
import { commonAxios } from '../../utils/commonAxios';

export default function ChatPage() {
  useEffect(() => {
    commonAxios.get('chat').then(response => {
      console.log(response);
    });
  }, []);

  return <>Chat입니다.</>;
}
