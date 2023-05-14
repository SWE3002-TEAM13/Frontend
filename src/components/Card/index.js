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

function Card({ data }) {
  const statusText = (status) => {
    if (status === "possible") return "거래가능";
    else if (status === "progress") return "거래 중";
    else if (status === "done") return "거래 완료";
  };

  return (
    <CardContainer id={"card " + data.id}>
      <ImgContainer>
        <ImageShow src={data.photo} alt="photo" />
      </ImgContainer>
      <ContentContainer>
        <PostTitleAndLikeContainer>
          <PostTitleContainer>{data.title}</PostTitleContainer>
          <Like count={data.like_count}></Like>
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
