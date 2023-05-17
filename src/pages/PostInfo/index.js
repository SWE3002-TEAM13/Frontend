import Info from '../../components/Info';
import BasicLayout from '../../components/common/BasicLayout';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { commonAxios } from '../../utils/commonAxios';

function InfoPage() {
  const [info, setInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    commonAxios
      .get(`/post/${id}`, {
        params: {
          id: id,
        },
      })
      .then(res => {
        setInfo(res.data);
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  console.log(info);
  return <BasicLayout children={<Info data={info}></Info>} />;
}

export default InfoPage;
