import { useParams } from "react-router-dom";
import Post from "../../components/Post";
import BasicLayout from "../../components/common/BasicLayout";
import { useEffect, useState } from "react";
import { commonAxios } from "../../utils/commonAxios";

function EditPage() {
  const [info, setInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    commonAxios
      .get(`/post/${id}`)
      .then((res) => {
        setInfo(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return <BasicLayout children={<Post edit={info} id={id}></Post>} />;
}

export default EditPage;
