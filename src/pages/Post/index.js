import { useLocation } from "react-router-dom";
import Post from "../../components/Post";
import BasicLayout from "../../components/common/BasicLayout";
import { useEffect } from "react";

function PostPage() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return <BasicLayout children={<Post type={location.state.value}></Post>} />;
}

export default PostPage;
