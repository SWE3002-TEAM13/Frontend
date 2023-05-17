import { useLocation, useParams } from 'react-router-dom';
import Post from '../../components/Post';
import BasicLayout from '../../components/common/BasicLayout';
import { useEffect, useState } from 'react';
import { commonAxios } from '../../utils/commonAxios';

function EditPage() {
  const [info, setInfo] = useState(null);
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

  return <BasicLayout children={<Post edit={info}></Post>} />;
}

export default EditPage;
