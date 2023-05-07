import Post from "../../components/Post";
import BasicLayout from "../../components/common/BasicLayout";

function PostPage() {
  return <BasicLayout children={<Post></Post>} />;
}

export default PostPage;
