import { useEffect, useState } from 'react';
import { commonAxios } from './commonAxios';
import { getCookie } from './getCookie';

export const useMe = () => {
  const [me, setMe] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await commonAxios('user/me', {
          headers: {
            Authorization: `Bearer ${getCookie('access_token')}`,
          },
        });
        setMe(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return me;
};
