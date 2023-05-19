import Info from "../../components/Info";
import BasicLayout from "../../components/common/BasicLayout";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { commonAxios } from "../../utils/commonAxios";

function InfoPage() {
  const [info, setInfo] = useState([]);
  const { id } = useParams();
  // 사용자가 눌렀던 건지 아닌건지 검증해야하는데... 그 기준이 될 데이터가 없음 post.id라던가..
  const [islike, setIslike] = useState(false);

  useEffect(() => {
    commonAxios
      .get(`/post/${id}`, {
        params: {
          id: id,
        },
      })
      .then((res) => {
        setInfo(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, islike]);

  console.log(info);
  return (
    <BasicLayout
      children={<Info data={info} islike={setIslike} like={islike}></Info>}
    />
  );
}

export default InfoPage;
