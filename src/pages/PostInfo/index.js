import Info from "../../components/Info";
import BasicLayout from "../../components/common/BasicLayout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function InfoPage() {
  const [info, setInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      // eslint-disable-next-line
      .get(`${process.env.REACT_APP_API_ENDPOINT}/post/${id}`, {
        withCredentials: true,
        params: {
          id: id,
        },
      })
      .then(function (response) {
        setInfo(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(info);
  return <BasicLayout children={<Info data={info}></Info>} />;
}

export default InfoPage;
