import { useEffect } from 'react';
import { commonAxios } from './commonAxios';
import { getCookie } from './getCookie';

export const useMe = () => {
  useEffect(() => {
    commonAxios('user/me', {
      headers: {
        Authorization: `Bearer ${getCookie('access_token')}`,
      },
    })
      .then(res => res.data)
      .catch(err => {
        console.error(err);
      });
  }, []);
};
