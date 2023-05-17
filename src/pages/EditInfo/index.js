import { useLocation, useParams } from "react-router-dom";
import Post from "../../components/Post";
import BasicLayout from "../../components/common/BasicLayout";
import { useEffect, useState } from "react";
import axios from "axios";

function EditPage() {
  const [info, setInfo] = useState(null);
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

  return <BasicLayout children={<Post edit={info}></Post>} />;
}

export default EditPage;
