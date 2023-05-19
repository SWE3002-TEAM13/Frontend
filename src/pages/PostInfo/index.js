import Info from '../../components/Info';
import BasicLayout from '../../components/common/BasicLayout';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { commonAxios } from '../../utils/commonAxios';
import { getCookie } from '../../utils/getCookie';

function InfoPage() {
  const [info, setInfo] = useState([]);
  const { id } = useParams();
  const [islike, setIslike] = useState();

  useEffect(() => {
    commonAxios
      .get(`/post/${id}`, {
        headers: {
          Authorization: `Bearer ${getCookie('access_token')}`,
        },
      })
      .then(res => {
        setInfo(res.data);
        setIslike(res.data.islike);
        console.log(res);
        console.log(res.data.islike);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  return (
    <BasicLayout
      children={<Info data={info} setIslike={setIslike} islike={islike}></Info>}
    />
  );
}

export default InfoPage;
