import {
  CardContainer,
  ImgContainer,
  ContentContainer,
  PostTitleAndLikeContainer,
  PostTitleContainer,
  PostAuthorContainer,
  PostDateContainer,
  StateAndPriceContainer,
  PriceTextContainer,
  ImageShow,
} from "./styles";
import Like from "../common/Like";
import StateTag from "../common/StateTag";
import axios from "axios";

function Card({ data }) {
  const statusText = (status) => {
    if (status === "possible") return "거래가능";
    else if (status === "progress") return "거래 중";
    else if (status === "done") return "거래 완료";
  };

  const handleLike = (e) => {
    // eslint-disable-next-line
    axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}` +
        "/post/" +
        `${data.id}` +
        "/like",
      {
        id: data.id,
      }
    );
  };

  const handleDislike = (e) => {
    // eslint-disable-next-line
    axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}` +
        "/post/" +
        `${data.id}` +
        "/like",
      {
        id: data.id,
      }
    );
  };

  return (
    <CardContainer id={"card " + data.id}>
      <ImgContainer>
        <ImageShow src={data.photo} alt="photo" />
      </ImgContainer>
      <ContentContainer>
        <PostTitleAndLikeContainer>
          <PostTitleContainer>{data.title}</PostTitleContainer>
          <Like
            count={data.like_count}
            onClickLike={handleLike}
            onClickDislike={handleDislike}
          ></Like>
        </PostTitleAndLikeContainer>
        <PostAuthorContainer>{data.author_id}</PostAuthorContainer>
        <PostDateContainer>작성일 : {data.created_at}</PostDateContainer>
        <StateAndPriceContainer>
          <StateTag
            className={data.status}
            text={statusText(data.status)}
          ></StateTag>
          <PriceTextContainer>{data.price}원</PriceTextContainer>
        </StateAndPriceContainer>
      </ContentContainer>
    </CardContainer>
  );
}

export default Card;
